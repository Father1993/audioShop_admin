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

import {
  AUDIO_FEATURES,
  COMPANY_NAMES,
  GOODS_COLLECTIONS,
  INSTALLATION_TYPES,
} from '../../../constants/allCharacteristics'
import {
  AUDIO_SIZES,
  AUDIO_TYPES,
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'

export const AudioForm = ({ maxImagesCount }: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <TextInput
          className='block__select'
          source='name'
          validate={[required()]}
          defaultValue={'Плеер'}
        />
        <SelectInput
          className='block__select'
          choices={AUDIO_TYPES}
          source='type'
          validate={[required()]}
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={AUDIO_SIZES}
          source='productSizes'
          validate={[required()]}
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={COMPANY_NAMES}
          source='companyName'
          validate={[required()]}
          optionValue='name'
        />
        <TextInput
          className='block__select'
          source='model'
          validate={[required()]}
        />
        <TextInput
          source='description'
          validate={[required()]}
          multiline
          resettable
        />
        <NumberInput
          min={0}
          className='block__select'
          source='price'
          validate={[required()]}
        />
      </div>
      <div className='block-right'>
        <SelectInput
          className='block__select'
          choices={INSTALLATION_TYPES}
          source='installationType'
          validate={[required()]}
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={GOODS_COLLECTIONS}
          source='collections'
          validate={[required()]}
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={GOODS_POPULARITY}
          source='popularity'
          validate={[required()]}
          optionValue='name'
        />
        <NumberInput
          min={0}
          className='block__select'
          source='inStock'
          validate={[required()]}
        />
        <TextInput
          className='block__select'
          source='vendorCode'
          validate={[required()]}
        />
        <CheckboxGroupInput source='isNew' choices={GOODS_IS_NEW} />
        <CheckboxGroupInput
          source='isBestseller'
          choices={GOODS_IS_BESTSELLER}
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
      <div className='block'>
        <CheckboxGroupInput
          source='characteristics.features'
          choices={AUDIO_FEATURES}
          optionValue='name'
        />
      </div>
    </TabbedForm.Tab>
  </TabbedForm>
)
