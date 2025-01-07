import '../index.css'

import {
  CheckboxGroupInput,
  ImageField,
  ImageInput,
  NumberInput,
  required,
  SelectInput,
  TabbedForm,
  TextInput,
} from 'react-admin'

import { OneDinCharacteristics } from '../../../components/Audio/OneDinCharacteristics/OneDinCharacteristics'
import { TwoDinCharacteristics } from '../../../components/Audio/TwoDinCharacteristics/TwoDinCharacteristics'
import {
  AUDIO_TYPES,
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
  GOODS_SIZES,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'

export const AudioForm = ({
  type,
  handleSelectType,
  maxImagesCount,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <SelectInput
          className='block__select'
          choices={AUDIO_TYPES}
          source='type'
          validate={[required()]}
          onChange={handleSelectType}
          optionValue='name'
        />
        <NumberInput
          min={0}
          className='block__select'
          source='price'
          validate={[required()]}
        />
        <TextInput
          className='block__select'
          source='name'
          validate={[required()]}
          resettable
        />
        <NumberInput
          min={0}
          className='block__select'
          source='inStock'
          validate={[required()]}
        />
        <TextInput
          source='description'
          validate={[required()]}
          multiline
          resettable
        />
      </div>
      <div className='block-right'>
        <SelectInput
          className='block__select'
          choices={GOODS_POPULARITY}
          source='popularity'
          validate={[required()]}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='sizes'
          choices={GOODS_SIZES}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isNew'
          choices={GOODS_IS_NEW}
          optionValue='name'
        />
        <CheckboxGroupInput
          source='isBestseller'
          choices={GOODS_IS_BESTSELLER}
          optionValue='name'
        />
      </div>
      <ImageInput
        maxSize={3000000}
        label='Картинки товара'
        source='images'
        validate={[allowedImageExtensions(), maxImagesCount(), required()]}
        multiple
      >
        <>
          <ImageField source='url' title='desc' />
          <ImageField source='src' title='title' />
        </>
      </ImageInput>
    </TabbedForm.Tab>
    <TabbedForm.Tab label='Характеристики'>
      {type === AUDIO_TYPES[0].name && <OneDinCharacteristics />}
      {type === AUDIO_TYPES[1].name && <TwoDinCharacteristics />}
    </TabbedForm.Tab>
  </TabbedForm>
)
