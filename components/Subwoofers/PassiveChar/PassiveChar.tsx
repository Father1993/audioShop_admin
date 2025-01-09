import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLORS,
  NOTEBOOK_COVERS,
  NOTEBOOK_FASTENINGS,
  NOTEBOOK_RULED,
} from '../../../constants/audioCharacteristics'

const PassiveChar = () => (
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
      choices={NOTEBOOK_COVERS}
      source='characteristics.cover'
      validate={[required()]}
      defaultValue={NOTEBOOK_COVERS[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={NOTEBOOK_FASTENINGS}
      source='characteristics.fastenings'
      validate={[required()]}
      defaultValue={NOTEBOOK_FASTENINGS[0].name}
      optionValue='name'
    />
    <SelectInput
      className='block__select'
      choices={NOTEBOOK_RULED}
      source='characteristics.ruled'
      validate={[required()]}
      defaultValue={NOTEBOOK_RULED[0].name}
      optionValue='name'
    />
  </div>
)

export default PassiveChar
