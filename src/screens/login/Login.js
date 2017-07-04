import {
  View,
  TextInput,
  Button,
  Image,
} from 'react-native'
import React from 'react'

export default class Login {
  render() {
    return (
      <View>
        <Image source={require('../../../resources/qiwi.png')} />
        <TextInput
          placeholder="Номер телефона"
          keyboardType="numeric"
        />
        <Button
          title="Получить СМС"
        />
      </View>
    )
  }
}
