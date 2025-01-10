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
  COMPANY_NAMES,
  GOODS_COLLECTIONS,
  SPEAKERS_POWER,
  SPEAKERS_SIZES,
} from '../../../constants/allCharacteristics'
import {
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
  SPEAKERS_TYPES,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'

export const SpeakersForm = ({ maxImagesCount }: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <TextInput
          className='block__select'
          source='name'
          validate={[required()]}
          defaultValue={'Динамики'}
          resettable
        />
        <SelectInput
          className='block__select'
          choices={SPEAKERS_TYPES}
          source='type'
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
        <SelectInput
          className='block__select'
          choices={SPEAKERS_SIZES}
          source='productSizes'
          validate={[required()]}
          optionValue='name'
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
        <SelectInput
          className='block__select'
          choices={SPEAKERS_POWER}
          source='characteristics.speakersPower'
          validate={[required()]}
          optionValue='name'
        />
      </div>
    </TabbedForm.Tab>
  </TabbedForm>
)
