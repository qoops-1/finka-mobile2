import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import Login from './Login'
import Drawer from './Drawer'
import Pin from './Pin'

export default (store) => {
  Navigation.registerComponent('finka.Login', () => Login, store, Provider)
  Navigation.registerComponent('finka.Drawer', () => Drawer, store, Provider)
  Navigation.registerComponent('finka.Pin', () => Pin, store, Provider)
}
