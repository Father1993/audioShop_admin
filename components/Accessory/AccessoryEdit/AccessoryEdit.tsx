import React from 'react'
import { Edit } from 'react-admin'

import { ACCESSORIES_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { AccessoryForm } from '../AccessoryForm/AccessoryForm'

export const AccessoryEdit = () => {
  const {
    type,
    handleSelectType,
    maxImagesCount,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(ACCESSORIES_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <AccessoryForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
