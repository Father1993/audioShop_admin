import { Admin, defaultTheme, Resource } from 'react-admin'

import { AudioCreate } from '../components/Audio/AudioCreate/AudioCreate'
import { AudioEdit } from '../components/Audio/AudioEdit/AudioEdit'
import { GoodsList } from '../components/GoodsList/GoodsList'
import { ProductShow } from '../components/ProductShow/ProductShow'
import { UsersCreate } from '../components/Users/UsersCreate/UsersCreate'
import { UsersEdit } from '../components/Users/UsersEdit/UsersEdit'
import { UsersList } from '../components/Users/UsersList/UsersList'
import { UsersShow } from '../components/Users/UsersShow/UsersShow'
import { AUDIO_SOURCE_NAME, USERS_SOURCE_NAME } from '../constants/sourceNames'
import { authProvider } from './authProvider'
import dataProvider from './dataProvider'

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={{
      ...defaultTheme,
      palette: {
        mode: 'dark',
      },
    }}
  >
    <Resource
      name={USERS_SOURCE_NAME}
      list={UsersList}
      show={UsersShow}
      create={UsersCreate}
      edit={UsersEdit}
    />
    <Resource
      name={AUDIO_SOURCE_NAME}
      list={GoodsList}
      create={AudioCreate}
      show={ProductShow}
      edit={AudioEdit}
    />
  </Admin>
)
