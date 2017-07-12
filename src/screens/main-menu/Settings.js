import React from 'react'
import {
  View,
  Button,
  TouchableOpacity,
} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import storage from 'react-native-simple-store'
import clearRedux from '../../redux-store/actions/clearStore'
import gotoLogin from '../login/init'

const settings = [
  {
    name: 'Платеж через QIWI',
    screen: 'finka.AuthQIWI',
  },
]

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
        <List containerStyle={{marginBottom: 20}}>
          {
            settings.map((setting, i) => (
              <ListItem
                key={i}
                title={setting.name}
                onPress={() => this.gotoSetting(setting.screen)}
                component={TouchableOpacity}
              />
            ))
          }
        </List>
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
