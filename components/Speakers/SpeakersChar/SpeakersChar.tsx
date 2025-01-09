import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLORS,
  SOUVENIR_HEIGHTS,
  SOUVENIR_MATERIALS,
  SOUVENIR_WEIGHTS,
} from '../../../constants/audioCharacteristics'

const SpeakersChar = () => (
  <div className='block'>
    <SelectInput
      className='block__select'
      choices={GOODS_COLORS}
      source='characteristics.color'
      validate={[required()]}
      defaultValue={GOODS_COLORS[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={SOUVENIR_MATERIALS}
      source='characteristics.material'
      validate={[required()]}
      defaultValue={SOUVENIR_MATERIALS[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={SOUVENIR_HEIGHTS}
      source='characteristics.height'
      validate={[required()]}
      defaultValue={SOUVENIR_HEIGHTS[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={SOUVENIR_WEIGHTS}
      source='characteristics.weight'
      validate={[required()]}
      defaultValue={SOUVENIR_WEIGHTS[0].name}
      optionValue='name'
    />
  </div>
)

export default SpeakersChar
