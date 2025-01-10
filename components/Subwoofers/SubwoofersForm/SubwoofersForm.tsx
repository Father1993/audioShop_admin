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
  SUBWOOFER_IMPEDANCE,
  SUBWOOFER_MOUNTING_DEPTH,
  SUBWOOFER_POWER,
  SUBWOOFER_SIZES,
} from '../../../constants/allCharacteristics'
import {
  GOODS_IS_BESTSELLER,
  GOODS_IS_NEW,
  GOODS_POPULARITY,
  SUBWOOFERS_TYPES,
} from '../../../constants/goodsTypes'
import { IBaseFormProps } from '../../../types/goods'
import { allowedImageExtensions } from '../../../utils/validation'

export const SubwoofersForm = ({
  handleSelectType,
  maxImagesCount,
}: IBaseFormProps) => (
  <TabbedForm>
    <TabbedForm.Tab label='Основная информация'>
      <div className='block'>
        <TextInput
          className='block__select'
          source='name'
          defaultValue={'Сабвуфер'}
          validate={[required()]}
          resettable
        />
        <SelectInput
          className='block__select'
          choices={SUBWOOFERS_TYPES}
          source='type'
          validate={[required()]}
          onChange={handleSelectType}
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
          choices={SUBWOOFER_SIZES}
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
          choices={SUBWOOFER_POWER}
          source='characteristics.power'
          validate={[required()]}
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={SUBWOOFER_IMPEDANCE}
          source='characteristics.impedances'
          optionValue='name'
        />
        <SelectInput
          className='block__select'
          choices={SUBWOOFER_MOUNTING_DEPTH}
          source='characteristics.mountingSize'
          optionValue='name'
        />
      </div>
    </TabbedForm.Tab>
  </TabbedForm>
)
