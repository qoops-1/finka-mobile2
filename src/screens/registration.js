import { Navigation } from 'react-native-navigation'

import Login from './login/Login'

export default () => {
  Navigation.registerComponent('finka.Login', () => Login)
}
