import '../index.css'

import { CheckboxGroupInput, required, SelectInput } from 'react-admin'

import {
  AUDIO_FEATURES,
  COLLECTIONS,
  COMPANY_NAMES,
  INSTALLATION_TYPES,
} from '../../../constants/audioCharacteristics'

export const TwoDinCharacteristics = () => (
  <>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={COMPANY_NAMES}
        source='characteristics.companyName'
        validate={[required()]}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={INSTALLATION_TYPES}
        source='characteristics.installationType'
        validate={[required()]}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <CheckboxGroupInput
        source='characteristics.features'
        choices={AUDIO_FEATURES}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={COLLECTIONS}
        source='characteristics.collections'
        validate={[required()]}
        optionValue='name'
      />
    </div>
  </>
)
