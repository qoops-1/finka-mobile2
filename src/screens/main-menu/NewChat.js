import React from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
} from 'react-native'
import createChat from '../../redux-store/actions/createChat'
import commonStyle from '../commonStyles'
import screens from './screens'

class NewChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = { phone: '' }
    this.onPress = this.onPress.bind(this)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this)
  }

  onPress() {
    this.props.createChat([this.state.phone])
      .then(() => this.props.navigator.pop())
  }

  onNavigatorEvent(event) {
    if (event.type === 'DeepLink') {
      if (event.link === 'chats') {
        this.props.navigator.resetTo(screens.chats)
      } else if (event.link === 'settings') {
        this.props.navigator.resetTo(screens.settings)
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={commonStyle.container}
        behavior='padding'
        keyboardVerticalOffset={20}
      >
        <Text>Добавьте собеседника</Text>
        <TextInput
          placeholder='Номер телефона'
          style={commonStyle.input}
          onChangeText={text => this.setState({ phone: text })}
          value={this.state.phone}
        />
        <Button
          style={{padding: 10}}
          title='Добавить'
          onPress={this.onPress}
        />
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = {
  createChat,
}

export default connect(null, mapDispatchToProps)(NewChat)
