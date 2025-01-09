import { Create } from 'react-admin'

import { SPEAKERS_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { SpeakersForm } from '../SpeakersForm/SpeakersForm'

export const SpeakersCreate = () => {
  const { handleSelectType, maxImagesCount } = useGoodsCreation(SPEAKERS_TYPES)

  return (
    <Create>
      <SpeakersForm
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
