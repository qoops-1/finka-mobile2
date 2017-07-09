import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import registerPhone from '../../redux-store/actions/registerPhone'
import commonStyle from '../commonStyles'

const style = StyleSheet.create({
  qiwiImage: {
    width: '70%',
    resizeMode: 'contain',
  },
})

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { phone: '', error: '' }
    this.onPhoneSubmit = this.onPhoneSubmit.bind(this)
  }

  onPhoneSubmit() {
    this.props.registerPhone(this.state.phone)
      .then(() => this.props.navigator.push({ screen: 'finka.Pin' }))
      .catch(response => this.setState({ error: response.error.message }))
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <Image source={require('../../../resources/qiwi.png')} style={style.qiwiImage} />
        <TextInput
          style={commonStyle.input}
          placeholder='Номер телефона'
          keyboardType='numeric'
          value={this.state.phone}
          onChangeText={text => this.setState({ phone: text })}
        />
        <Button
          title='Получить СМС'
          onPress={this.onPhoneSubmit}
        />
        <Text style={commonStyle.errorMsg}>{this.state.error}</Text>
      </View>
    )
  }
}

Login.propTypes = {
  registerPhone: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  registerPhone,
}

export default connect(null, mapDispatchToProps)(Login)
