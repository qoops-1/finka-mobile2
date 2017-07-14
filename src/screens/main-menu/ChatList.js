import React from 'react'
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List, ListItem } from 'react-native-elements'
import ActionCableProvider from 'react-actioncable-provider'
import ActionCable from 'react-native-actioncable'
import getAllChats from '../../redux-store/actions/getAllChats'
import newChat from '../../redux-store/actions/newChat'
import newTransactionReceived from '../../redux-store/actions/newTransactionReceived'

const config = require('../../../appConfig.json')

class ChatList extends React.Component {
  static contextTypes = {
    cable: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
    this.props.getAllChats().then(() => {
      this.setState({
        dataSource: ds.cloneWithRows(this.props.chats),
      })
    })
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.onPress = this.onPress.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    this.chatsSub = this.context.cable.subscriptions.create('ChatChannel',
      { received: this.props.onReceivedChat })
    this.messagesSub = this.context.cable.subscriptions.create('MessageChannel',
      { received: this.props.newTransactionReceived })
  }

  componentWillUnmount() {
    this.context.cable.subscriptions.remove(this.chatsSub)
    this.context.cable.subscriptions.remove(this.messagesSub)
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'add') {
        this.props.navigator.push({
          screen: 'finka.NewChat',
          navigatorStyle: {
            tabBarHidden: true,
          },
        })
      }
    } else if (event.type === 'DeepLink') {
      if (event.link === 'settings') {
        this.props.navigator.resetTo({
          screen: 'finka.Settings',
          title: 'Настройки'
        })
      } else if (event.link === 'addchat') {
        this.props.navigator.resetTo({
          screen: 'finka.NewChat',
        })
      }
    }
  }

  onPress(chosenChat) {
    this.props.navigator.push({
      screen: 'finka.Chat',
      title: chosenChat.companions[0].name,
      passProps: { chosenChatID: chosenChat.id },
      navigatorStyle: {
        tabBarHidden: true,
      },
    })
  }

  renderRow(rowData) {
    return (
      <ListItem
        roundAvatar
        key={rowData.id}
        title={rowData.companions[0].name}
        subtitle={rowData.companions[0].phone}
        avatar={{ uri: rowData.avatar_url }}
        onPress={() => this.onPress(rowData)}
        component={TouchableOpacity}
      />
    )
  }

  render() {
    return (
      <List containerStyle={{ marginTop: 0, flex: 1 }}>
        <ListView
          enableEmptySections
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </List>
    )
  }
}

ChatList.propTypes = {
  getAllChats: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  onReceivedChat: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
  }
}

const mapDispatchToProps = {
  onReceivedChat: newChat,
  getAllChats,
  newTransactionReceived
}

function chatListWithCable(props) {
  const url = `ws://${config.endpoint}:3000/cable`
  return (
    <ActionCableProvider url={url}>
      <ChatList {...props} />
    </ActionCableProvider>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(chatListWithCable)
