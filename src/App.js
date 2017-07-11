import React from 'react'
import storage from 'react-native-simple-store'
import initStore from './redux-store/initStore'
import registerScreens from './screens/registration'
import gotoLogin from './screens/login/init'
import gotoMain from './screens/main-menu/init'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.startApp()
  }

  startApp() {
    storage.get('currentUser')
      .then(data => {
        if (data === null) {
          registerScreens(initStore({}))
          gotoLogin()
        } else {
          registerScreens(initStore({ currentUser: data }))
          gotoMain()
        }
      })
  }
}

