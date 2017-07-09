import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import Login from './Login'
import Drawer from './Drawer'
import Pin from './Pin'
import Chats from './main-menu/Chats'
import Settings from './main-menu/Settings'

export default (store) => {
  Navigation.registerComponent('finka.Login', () => Login, store, Provider)
  Navigation.registerComponent('finka.Drawer', () => Drawer, store, Provider)
  Navigation.registerComponent('finka.Pin', () => Pin, store, Provider)
  Navigation.registerComponent('finka.Chats', () => Chats, store, Provider)
  Navigation.registerComponent('finka.Settings', () => Settings, store, Provider)
}
