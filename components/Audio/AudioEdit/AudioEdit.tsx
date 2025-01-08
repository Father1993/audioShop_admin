import React from 'react'
import { Edit } from 'react-admin'

import { AUDIO_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { AudioForm } from '../AudioForm/AudioForm'

export const AudioEdit = () => {
  const {
    type,
    handleSelectType,
    maxImagesCount,
    handleClone,
    cloneProductSpinner,
  } = useGoodsEdition(AUDIO_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <AudioForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
