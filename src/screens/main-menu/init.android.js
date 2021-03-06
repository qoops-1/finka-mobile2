import { Navigation } from 'react-native-navigation'

export default function () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'finka.ChatList',
      title: 'Чаты',
      navigatorStyle: {},
      navigatorButtons: {},
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
