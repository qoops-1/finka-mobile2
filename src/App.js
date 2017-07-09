import React from 'react'
import { Navigation } from 'react-native-navigation'
import initStore from './redux-store/initStore'
import registerScreens from './screens/registration'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    registerScreens(initStore())
    this.startApp()
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'finka.Login',
        title: 'Вход',
      },
      drawer: {
        left: {
          screen: 'finka.Drawer',
        },
      },
      animationType: 'none',
    });
  }
}

