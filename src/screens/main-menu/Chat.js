import React from 'react'
import {
  Text,
} from 'react-native'

export default class Chat extends React.Component {
  render() {
    return (
      <Text>{this.props.chosenChat.id}</Text>
    )
  }
}
