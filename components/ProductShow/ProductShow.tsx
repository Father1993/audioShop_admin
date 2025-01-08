// eslint-disable-next-line no-unused-vars
import './index.css'

import React from 'react'
import {
  DeleteButton,
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <div className='show-actions'>
        <DeleteButton />
      </div>
      <ImageField source='images' src='url' title='desc' />
      <TextField source='name' />
      <TextField source='category' />
      <RichTextField source='description' />
    </SimpleShowLayout>
  </Show>
)
