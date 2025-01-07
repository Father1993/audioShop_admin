import React from 'react'
import {
  DeleteButton,
  EditButton,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin'

export const UsersShow = () => (
  <Show
    actions={
      <TopToolbar>
        <EditButton />
        <DeleteButton />
      </TopToolbar>
    }
  >
    <SimpleShowLayout>
      <ImageField source='image.url' title='image.desc' />
      <TextField source='name' />
      <TextField source='email' />
      <TextField source='role' />
    </SimpleShowLayout>
  </Show>
)

export default UsersShow
