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
import sendQiwiSMS from '../../redux-store/actions/sendQiwiSMS'
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
    this.onPressQIWI = this.onPressQIWI.bind(this)
    this.logout = this.logout.bind(this)
    this.gotoSetting = this.gotoSetting.bind(this)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this)
  }

  gotoSetting(screen) {
    this.props.navigator.push({
      screen,
    })
  }

  onNavigatorEvent(event) {
    if (event.type === 'DeepLink') {
      if (event.link === 'chats') {
        this.props.navigator.resetTo(screens.chats)
      } else if (event.link === 'addchat') {
        this.props.navigator.resetTo(screens.addchat)
      }
    }
  }

  onPressQIWI() {
    this.props.sendQiwiSMS()
    this.props.navigator.push({
      screen: 'finka.QiwiWallet',
    })
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
        <ColoredButton
          buttonStyle={{ marginTop: 10 }}
          backgroundColor='#f4a51d'
          title='Привязать кошелек QIWI'
          onPress={this.onPressQIWI}
        />
        <List containerStyle={{ marginBottom: 20 }}>
          {
            settings.map((setting, i) => (
              <ListItem
                key={i}
                title={setting.name}
                onPress={() => this.gotoSetting('finka.QiwiWallet')}
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
  sendQiwiSMS: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  clearRedux,
  sendQiwiSMS,
}

export default connect(null, mapDispatchToProps)(Settings)
