import React from 'react'
import { Create } from 'react-admin'

import { ACCESSORIES_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { AccessoryForm } from '../AccessoryForm/AccessoryForm'

export const AccessoryCreate = () => {
  const { type, handleSelectType, maxImagesCount } =
    useGoodsCreation(ACCESSORIES_TYPES)

  return (
    <Create>
      <AccessoryForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
