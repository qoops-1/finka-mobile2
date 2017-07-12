import { Navigation } from 'react-native-navigation'
import icons, { iconsLoaded } from '../../icons'

export default function () {
  iconsLoaded.then(() => {
    Navigation.startTabBasedApp({
      screen:{
        label: 'Чаты',
        screen: 'finka.ChatList',
        title: 'Чаты',
        icon: icons['chatbubbles-outline'],
        selectedIcon: icons['chatbubbles'],
        navigatorButtons: {
          rightButtons: [
            {
              id: 'add',
              icon: icons['add'],
            },
          ],
        },
      },
    })
  })
}