import { Create, PasswordInput, required } from 'react-admin'

import { UsersForm } from '../UsersForm/UsersForm'

export const UsersCreate = () => (
  <Create>
    <UsersForm
      passwordComponent={
        <PasswordInput source='password' validate={[required()]} resettable />
      }
    />
  </Create>
)
