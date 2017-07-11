import { Navigation } from 'react-native-navigation'

export default function () {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Чаты',
        screen: 'finka.ChatList',
        title: 'Чаты',
      },
      {
        label: 'Настройки',
        screen: 'finka.Settings',
        title: 'Настройки',
      },
    ],
    tabsStyle: {
      tabBarBackgroundColor: 'white',
    },
  })
}
