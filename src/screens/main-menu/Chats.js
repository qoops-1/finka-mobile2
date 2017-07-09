import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class Chats extends React.Component {

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'add',
        title: '+'
      },
    ],
  };

  render() {
    return (
      <View>
        <Text>Hi there from chats</Text>
      </View>
    )
  }
}
