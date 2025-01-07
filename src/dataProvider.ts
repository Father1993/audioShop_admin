import { stringify } from 'query-string'
import { DataProvider, fetchUtils, HttpError } from 'react-admin'

import api from '../api/apiInstance'
import { USERS_SOURCE_NAME } from '../constants/sourceNames'
import { CLIENT_ERROR_CODE } from '../constants/statuseCodes'
import { IUser } from '../types/users'
import { getCreatedUser } from '../utils/dataProvider'

const httpClient = fetchUtils.fetchJson

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    }
    const { data } = await api.get(`/admin/${resource}?${stringify(query)}`)
    console.log(data)

    return {
      data: data.items,
      total: data.count,
    }
  },

  getOne: async (resource, params) => {
    const { data } = await api.get(
      `/admin/one?id=${params.id}&category=${resource}`
    )

    return {
      data,
    }
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    }
    const url = `/${resource}?${stringify(query)}`
    const { json } = await httpClient(url)
    return { data: json }
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    }
    const url = `/${resource}?${stringify(query)}`
    const { json, headers } = await httpClient(url)
    return {
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }
  },

  create: async (resource, params) => {
    if (resource === USERS_SOURCE_NAME) {
      const user = await getCreatedUser(params.data as IUser)

      if (user.status === CLIENT_ERROR_CODE) {
        return Promise.reject(new HttpError(user.message, CLIENT_ERROR_CODE))
      }

      return {
        data: user.newUser,
      }
    }
    const { json } = await httpClient(`/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    })
    return { data: json }
  },

  update: async (resource, params) => {
    const url = `/${resource}/${params.id}`
    const { json } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    })
    return { data: json }
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    const url = `/${resource}?${stringify(query)}`
    const { json } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    })
    return { data: json }
  },

  delete: async (resource, params) => {
    const id = params.previousData && params.previousData.id

    const { data } = await api.delete(
      `/admin/delete?id=${id}&category=${resource}`
    )

    return {
      data,
    }
  },

  deleteMany: async (resource, params) => {
    await api.delete(
      `/admin/delete-many?ids=${JSON.stringify(params.ids)}&category=${resource}`
    )

    return {
      data: [],
    }
  },
} as DataProvider
