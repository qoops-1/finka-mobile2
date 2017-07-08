import {
  View,
  TextInput,
  Button,
  Image,
} from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import registerPhone from '../redux-store/actions/registerPhone'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { phone: '' }
    this.onPhoneSubmit = this.onPhoneSubmit.bind(this)
  }

  onPhoneSubmit() {
    this.props.sendPhone(this.state.phone)
  }

  render() {
    return (
      <View>
        <Image source={require('../../resources/qiwi.png')} />
        <TextInput
          placeholder='Номер телефона'
          keyboardType='numeric'
          value={this.state.phone}
        />
        <Button
          title='Получить СМС'
          onPress={this.onPhoneSubmit}
        />
      </View>
    )
  }
}

Login.propTypes = {
  sendPhone: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    sendPhone: phone => dispatch(registerPhone(phone)),
  }
}

function mapStateToProps(state) {
  return {
    axios: state.axios,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)()
