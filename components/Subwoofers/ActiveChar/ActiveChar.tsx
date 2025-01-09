import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLORS,
  PEN_FRAMES,
  PEN_PECULIARITIES,
  PEN_TYPES,
} from '../../../constants/audioCharacteristics'

const ActiveChar = () => (
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
      choices={PEN_PECULIARITIES}
      source='characteristics.peculiarity'
      validate={[required()]}
      defaultValue={PEN_PECULIARITIES[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={PEN_TYPES}
      source='characteristics.penType'
      validate={[required()]}
      defaultValue={PEN_TYPES[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={PEN_FRAMES}
      source='characteristics.frame'
      validate={[required()]}
      defaultValue={PEN_FRAMES[0].name}
      optionValue='name'
    />
  </div>
)

export default ActiveChar
