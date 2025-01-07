import '../index.css'

import { required, SelectInput } from 'react-admin'

import {
  GOODS_CLASPS,
  GOODS_COLLARS,
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_DECORS,
  GOODS_FABRIC_TYPES,
  GOODS_FEATURES,
  GOODS_PRINT,
  GOODS_SEASONS,
  GOODS_SILHOUETTE,
  GOODS_SLEEVES,
} from '../../../constants/audioCharacteristics'

export const OneDinCharacteristics = () => (
  <>
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
        choices={GOODS_COLLARS}
        source='characteristics.collar'
        validate={[required()]}
        defaultValue={GOODS_COLLARS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SILHOUETTE}
        source='characteristics.silhouette'
        validate={[required()]}
        defaultValue={GOODS_SILHOUETTE[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_PRINT}
        source='characteristics.print'
        validate={[required()]}
        defaultValue={GOODS_PRINT[0].name}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_DECORS}
        source='characteristics.decor'
        validate={[required()]}
        defaultValue={GOODS_DECORS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_COMPOSITIONS}
        source='characteristics.composition'
        validate={[required()]}
        defaultValue={GOODS_COMPOSITIONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SEASONS}
        source='characteristics.season'
        validate={[required()]}
        defaultValue={GOODS_SEASONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_CLASPS}
        source='characteristics.clasp'
        validate={[required()]}
        defaultValue={GOODS_CLASPS[0].name}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_FEATURES}
        source='characteristics.features'
        validate={[required()]}
        defaultValue={GOODS_FEATURES[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_FABRIC_TYPES}
        source='characteristics.fabricType'
        validate={[required()]}
        defaultValue={GOODS_FABRIC_TYPES[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SLEEVES}
        source='characteristics.sleeve'
        validate={[required()]}
        defaultValue={GOODS_SLEEVES[0].name}
        optionValue='name'
      />
    </div>
  </>
)
