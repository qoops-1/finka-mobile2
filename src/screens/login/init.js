import { Navigation } from 'react-native-navigation'

export default function () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'finka.Login',
      title: 'Вход',
    },
    animationType: 'none',
  });
}
