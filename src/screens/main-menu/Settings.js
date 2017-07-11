import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import storage from 'react-native-simple-store'
import clearRedux from '../../redux-store/actions/clearStore'
import gotoLogin from '../login/init'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.clearRedux()
    storage.delete('chats')
    storage.delete('currentUser')
    storage.delete('settings')
    gotoLogin()
  }

  render() {
    return (
      <View>
        <Text>Hi there from settings</Text>
        <Button
          title='Выйти'
          color='red'
          onPress={this.logout}
        />
      </View>
    )
  }
}

Settings.propTypes = {
  clearRedux: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  clearRedux,
}

export default connect(null, mapDispatchToProps)(Settings)
