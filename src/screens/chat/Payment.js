import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class Payment extends React.Component {

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Отмена',
        id: 'cancel',
      },
    ],
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        Navigation.dismissModal()
      }
    }
  }
  render() {
    return (
      <View>
        
      </View>
    )
  }
}
