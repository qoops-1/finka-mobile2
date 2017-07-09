import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import React from 'react'

class Pin extends React.Component {

  render() {
    return (
      <View>
        <TextInput />
        <Button title='Проверить' onPress={this.onSubmit} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(Pin)
