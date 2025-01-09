import { Edit } from 'react-admin'

import { SPEAKERS_SOURCE_NAME } from '../../../constants/sourceNames'
import { useGoodsEdition } from '../../../hooks/useGoodsEdition'
import { EditTopToolbar } from '../../elements/EditTopToolbar/EditTopToolbar'
import { SpeakersForm } from '../SpeakersForm/SpeakersForm'

export const SpeakersEdit = () => {
  const { handleSelectType, maxImagesCount, handleClone, cloneProductSpinner } =
    useGoodsEdition(SPEAKERS_SOURCE_NAME)

  return (
    <Edit
      actions={
        <EditTopToolbar
          handleClone={handleClone}
          spinner={cloneProductSpinner}
        />
      }
    >
      <SpeakersForm
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Edit>
  )
}
