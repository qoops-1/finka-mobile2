import React from 'react'
import { Navigation } from 'react-native-navigation'
import storage from 'react-native-simple-store'
import initStore from './redux-store/initStore'
import registerScreens from './screens/registration'

export default class App extends React.Component {

  static loginScreen() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'finka.Login',
        title: 'Вход',
      },
      animationType: 'none',
    });
  }

  static mainScreen() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Чаты',
          screen: 'finka.Chats',
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

  constructor(props) {
    super(props)
    this.startApp()
  }

  startApp() {
    storage.get('currentUser')
      .then(data => {
        if (data === null) {
          registerScreens(initStore({}))
          App.loginScreen()
        } else {
          registerScreens(initStore({ currentUser: data }))
          App.mainScreen()
        }
      })
    
  }
}

