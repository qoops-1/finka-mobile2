import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyle from './commonStyles'
import verifyPin from '../redux-store/actions/verifyPin'
import App from '../App'

class Pin extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      pin: this.props.currentUser.pin,
    }
  }

  onSubmit() {
    this.props.verifyPin(this.state.pin)
      .then(() => App.mainScreen())
      .catch(response => this.setState({ error: response.error.message }))
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <Text>Пин-код был отправлен на введенный номер</Text>
        <TextInput
          style={commonStyle.input}
          placeholder='Пин-код'
          keyboardType='numeric'
          onChangeText={text => this.setState({ pin: text })}
          value={this.state.pin}
        />
        <Button title='Проверить' onPress={this.onSubmit} />
        <Text style={commonStyle.errorMsg}>{this.state.error}</Text>
      </View>
    )
  }
}

Pin.propTypes = {
  currentUser: PropTypes.object.isRequired,
  verifyPin: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = {
  verifyPin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin)
