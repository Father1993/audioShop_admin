import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";

const apiUrl = "http://localhost:3000/api/admin";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}/list?${stringify(query)}`;
    const { data } = await axios.get(url);

    return {
      data: data.items,
      total: data.count,
    };
  },

  getOne: async (resource, params) => {
    const category = JSON.parse(localStorage.getItem("show") as string);
    const url = `${apiUrl}/${resource}/one?id=${params.id}&category=${category}`;

    const { data } = await axios.get(url);

    return {
      data: data.productItem,
    };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json, headers } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    };
  },

  create: async (resource, params) => {
    try {
      const url = `${apiUrl}/${resource}/create`;

      // Преобразуем id в value для категории
      const category = params.data.category.value || params.data.category;

      // Добавляем категорию к данным продукта
      const productData = {
        ...params.data,
        category: category, // используем преобразованное значение категории
      };

      const { data } = await axios.post(url, productData);

      if (!data || !data.id) {
        throw new Error("Сервер не вернул ID созданного продукта");
      }

      return {
        data: { ...productData, id: data.id },
      };
    } catch (error) {
      console.error("Ошибка при создании данных:", error);
      throw new Error(
        "Не удалось создать данные. Пожалуйста, попробуйте еще раз.",
      );
    }
  },

  update: async (resource, params) => {
    try {
      const url = `${apiUrl}/${resource}/edit/${params.id}`;
      const { data } = await axios.put(url, {
        id: params.id,
        category: resource,
        ...params.data,
      });

      return { data };
    } catch (error) {
      console.error("Ошибка при обновлении данных:", error);
      throw new Error(
        "Не удалось обновить данные. Пожалуйста, попробуйте еще раз.",
      );
    }
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const id = params.previousData && params.previousData.id;
    const category = params.previousData && params.previousData.category;
    const url = `${apiUrl}/${resource}/delete?id=${id}&category=${category}`;

    const { data } = await axios.get(url);

    return {
      data,
    };
  },

  deleteMany: async (resource, params) => {
    const url = `${apiUrl}/${resource}/delete-many?ids=${JSON.stringify(params.ids)}`;

    await axios.get(url);

    return {
      data: [],
    };
  },
} as DataProvider;
