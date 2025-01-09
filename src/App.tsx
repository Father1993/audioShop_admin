import { Admin, defaultTheme, Resource } from 'react-admin'

import { AccessoryCreate } from '../components/Accessory/AccessoryCreate/AccessoryCreate'
import { AccessoryEdit } from '../components/Accessory/AccessoryEdit/AccessoryEdit'
import { AudioCreate } from '../components/Audio/AudioCreate/AudioCreate'
import { AudioEdit } from '../components/Audio/AudioEdit/AudioEdit'
import { GoodsList } from '../components/GoodsList/GoodsList'
import { ProductShow } from '../components/ProductShow/ProductShow'
import { SpeakersCreate } from '../components/Speakers/SpeakersCreate/SpeakersCreate'
import { SpeakersEdit } from '../components/Speakers/SpeakersEdit/SpeakersEdit'
import { SubwoofersCreate } from '../components/Subwoofers/SubwoofersCreate/SubwoofersCreate'
import { SubwoofersEdit } from '../components/Subwoofers/SubwoofersEdit/SubwoofersEdit'
import { UsersCreate } from '../components/Users/UsersCreate/UsersCreate'
import { UsersEdit } from '../components/Users/UsersEdit/UsersEdit'
import { UsersList } from '../components/Users/UsersList/UsersList'
import { UsersShow } from '../components/Users/UsersShow/UsersShow'
import {
  ACCESSORIES_SOURCE_NAME,
  AUDIO_SOURCE_NAME,
  SPEAKERS_SOURCE_NAME,
  SUBWOOFERS_SOURCE_NAME,
  USERS_SOURCE_NAME,
} from '../constants/sourceNames'
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
    <Resource
      name={ACCESSORIES_SOURCE_NAME}
      list={GoodsList}
      create={AccessoryCreate}
      show={ProductShow}
      edit={AccessoryEdit}
    />
    <Resource
      name={SUBWOOFERS_SOURCE_NAME}
      list={GoodsList}
      create={SubwoofersCreate}
      show={ProductShow}
      edit={SubwoofersEdit}
    />
    <Resource
      name={SPEAKERS_SOURCE_NAME}
      list={GoodsList}
      create={SpeakersCreate}
      show={ProductShow}
      edit={SpeakersEdit}
    />
  </Admin>
)
