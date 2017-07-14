import React from 'react'
import { connect } from 'react-redux'
import {
  View,
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
      .then(() => this.props.navigator.pop(),
      response => console.warn(response.error.message))
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
      <View style={commonStyle.container}>
        <TextInput
          style={commonStyle.input}
          onChangeText={text => this.setState({ phone: text })}
          value={this.state.phone}
        />
        <Button
          title='Создать'
          onPress={this.onPress}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  createChat,
}

export default connect(null, mapDispatchToProps)(NewChat)
