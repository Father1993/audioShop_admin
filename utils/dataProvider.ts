import api from '../api/apiInstance'
import { IUser } from '../types/users'

export const convertImageToDataUrl = async (src: string, title: string) => {
  const imgBlob = await fetch(src).then((result) => result.blob())
  const dataUrl = await new Promise((resolve) => {
    let reader = new FileReader()

    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(imgBlob)
  })

  return {
    dataUrl: dataUrl as string,
    title,
  }
}

export const getImagesFromRawFile = (imgs: IUser['image'][]) =>
  Promise.all(
    imgs.map(async (img) => await convertImageToDataUrl(img.src, img.title))
  )

export const getCreatedUser = async (user: IUser) => {
  let image: unknown

  if (user.image) {
    const img = user.image

    image = await convertImageToDataUrl(img.src, img.title)
  }

  const { data } = await api.post('/admin/add-user', {
    ...user,
    image,
  })

  return data
}

export const getUpdatedUser = async (user: IUser) => {
  let image: unknown

  if (user.image.src) {
    const img = user.image

    image = await convertImageToDataUrl(img.src, img.title)
  }

  const { data } = await api.post('/admin/edit-user', {
    ...user,
    image,
  })

  return data
}
