import React from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native'
import commonStyle from '../commonStyles'

export default class QiwiWallet extends React.Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
    this.state = {
      pin: '',
    }
  }

  onPress() {
    
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <Text>Введите пин-код отправленный на ваш номер</Text>
        <TextInput
          style={commonStyle.input}
          placeholder='asdfasdf'
          value={this.state.pin}
          onChangeText={text => this.setState({ pin: text })}
        />
        <Button
          title='Подтвердить'
          onPress={this.onPress}
        />
      </View>
    )
  }
}
