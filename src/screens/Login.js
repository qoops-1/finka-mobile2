import {
  View,
  TextInput,
  Button,
  Image,
} from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onPhoneSubmit = this.onPhoneSubmit.bind(this)
  }

  onPhoneSubmit() {
    
  }

  render() {
    return (
      <View>
        <Image source={require('../../resources/qiwi.png')} />
        <TextInput
          placeholder="Номер телефона"
          keyboardType="numeric"
        />
        <Button
          title="Получить СМС"
          onPress={this.onPhoneSubmit}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  sendLogin: 
}

const LoginContainer = connect(null, mapDispatchToProps)()
