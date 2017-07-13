import { Navigation } from 'react-native-navigation'
import icons, { iconsLoaded } from '../../icons'

export default function () {
  iconsLoaded.then(() =>
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'finka.ChatList',
        title: 'Чаты',
        navigatorStyle: {},
        navigatorButtons: {},
      },
    }),
  )
}
