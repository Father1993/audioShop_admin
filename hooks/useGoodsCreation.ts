import React, { useState } from 'react'

export const useGoodsCreation = (types: { id: number; name: string }[]) => {
  const [type, setType] = useState('')

  const handleSelectType = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLInputElement>
    const optionValue = event.target.value
    const currentOption = types.find((type) => type.name === optionValue)

    if (currentOption) {
      setType(currentOption.name)
    }
  }

  const maxImagesCount = () => (images: { rawFile: File }[]) => {
    if (images?.length > 4) {
      return 'Максимальное кол--во картинок 4'
    }
  }

  return { handleSelectType, maxImagesCount, type }
}
