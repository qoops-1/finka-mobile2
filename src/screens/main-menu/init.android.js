import { Navigation } from 'react-native-navigation'

export default function () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'finka.ChatList',
      title: 'Чаты',
      navigatorStyle: {},
      navigatorButtons: {},
      topTabs: [
        {
          screenId: 'finka.ChatList',
          title: 'Чаты',
        },
        {
          screenId: 'finka.Settings',
          title: 'Настройки',
        },
      ],
      leftButtons: [
        {
          id: 'sideMenu',
        },
      ],
    },
    drawer: {
      left: {
        screen: 'finka.Drawer',
        passProps: {},
      },
    },
  })
}
