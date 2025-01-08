import { useCallback, useEffect, useState } from 'react'
import {
  useDataProvider,
  useGetOne,
  useGetRecordId,
  useNotify,
  useRedirect,
} from 'react-admin'

import { AUDIO_TYPES } from '../constants/goodsTypes'
import { useGoodsCreation } from './useGoodsCreation'

export const useGoodsEdition = (sourceName: string) => {
  const dataProvider = useDataProvider()
  const redirect = useRedirect()
  const notify = useNotify()
  const id = useGetRecordId()
  const { data: product } = useGetOne(sourceName, { id })
  const { type, handleSelectType, maxImagesCount, setType } =
    useGoodsCreation(AUDIO_TYPES)

  const [cloneProductSpinner, setCloneProductSpinner] = useState(false)

  useEffect(() => {
    if (product) {
      setType(product.type)
    }
  }, [product, setType])

  const handleClone = useCallback(async () => {
    try {
      setCloneProductSpinner(true)

      const { data } = await dataProvider.create(sourceName, {
        data: {
          ...product,
          id: undefined,
          name: `${product.name} (Copy)`,
        },
      })

      notify('Товар скопирован', { type: 'success' })
      redirect('edit', sourceName, data.id)
    } catch (error) {
      notify('Ошибка при копировании', { type: 'error' })
    } finally {
      setCloneProductSpinner(false)
    }
  }, [dataProvider, notify, product, redirect, sourceName])

  return {
    handleSelectType,
    maxImagesCount,
    type,
    handleClone,
    cloneProductSpinner,
  }
}
