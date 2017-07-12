import React from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import commonStyle from '../commonStyles'
import verifyQiwi from '../../redux-store/actions/verifyQiwi'

class QiwiWallet extends React.Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
    this.state = {
      pin: '',
      error: '',
    }
  }

  onPress() {
    this.props.verifyQiwi(this.state.pin)
      .then(() => this.props.navigator.pop(),
        response => this.setState({ error: response.error.message }))
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <Text>Введите пин-код отправленный на ваш номер</Text>
        <TextInput
          style={commonStyle.input}
          placeholder='Пин-код'
          value={this.state.pin}
          onChangeText={text => this.setState({ pin: text })}
        />
        <Button
          title='Подтвердить'
          onPress={this.onPress}
        />
        <Text style={commonStyle.errorMsg}>{this.state.error}</Text>
      </View>
    )
  }
}

const mapDispatchToProps = {
  verifyQiwi,
}

export default connect(null, mapDispatchToProps)(QiwiWallet)