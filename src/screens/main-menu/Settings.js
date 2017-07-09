import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(logout)
  }

  logout() {

  }
  
  render() {
    return (
      <View>
        <Text>Hi there from settings</Text>
        <Button 
          title='Выйти'
          color='red'
          onPress={this.logout}
        />
      </View>
    )
  }
}
