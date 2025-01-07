import { Create } from 'react-admin'

import { AUDIO_TYPES } from '../../../constants/goodsTypes'
import { useGoodsCreation } from '../../../hooks/useGoodsCreation'
import { AudioForm } from '../AudioForm/AudioForm'

export const AudioCreate = () => {
  const { type, handleSelectType, maxImagesCount } =
    useGoodsCreation(AUDIO_TYPES)

  return (
    <Create>
      <AudioForm
        type={type}
        handleSelectType={handleSelectType}
        maxImagesCount={maxImagesCount}
      />
    </Create>
  )
}
