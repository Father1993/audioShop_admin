import React from 'react'
import { Create } from 'react-admin'

import { SUBWOOFERS_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { SubwoofersForm } from '../SubwoofersForm/SubwoofersForm'

export const SubwoofersCreate = () => {
  const { type, handleSelectType, maxImagesCount } =
    useGoodsCreation(SUBWOOFERS_TYPES)

  return (
    <Create>
      <SubwoofersForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
