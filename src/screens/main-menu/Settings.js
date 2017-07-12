import React from 'react'
import {
  View,
  Button,
  TouchableOpacity,
} from 'react-native'
import { List, ListItem, Button as ColoredButton } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import storage from 'react-native-simple-store'
import clearRedux from '../../redux-store/actions/clearStore'
import gotoLogin from '../login/init'

const settings = [
  {
    name: 'Профиль',
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

  gotoSetting(screen) {
    this.props.navigator.push({
      screen,
    })
  }

  render() {
    return (
      <View>
        <ColoredButton
          buttonStyle={{ marginTop: 10 }}
          backgroundColor='#f4a51d'
          title='Привязать кошелек QIWI'
          onPress={() => this.gotoSetting('finka.QiwiWallet')}
        />
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
