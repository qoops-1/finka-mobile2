import { Navigation } from 'react-native-navigation'

import registerScreens from './screens/registration'


registerScreens()
Navigation.startSingleScreenApp({
  screen: {
    screen: 'finka.Login',
    title: 'Login',
  },
})
