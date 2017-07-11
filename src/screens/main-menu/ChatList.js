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
import getAllChats from '../../redux-store/actions/getAllChats'

class ChatList extends React.Component {

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'add',
        title: '+'
      },
    ],
  };

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
    this.props.getAllChats().then(() => {
      this.setState({
        dataSource: ds.cloneWithRows(this.props.chats)
      })
    })
    this.onPress = this.onPress.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  onPress(chosenChat) {
    this.props.navigator.push({
      screen: 'finka.Chat',
      title: chosenChat.companions[0].name,
      passProps: { chosenChat },
      navigatorStyle: {
        tabBarHidden: true,
      }
    })
  }

  renderRow (rowData) {
    return (
        <ListItem
          roundAvatar
          key={rowData.id}
          title={rowData.companions[0].name}
          subtitle={rowData.companions[0].phone}
          avatar={{uri:rowData.avatar_url}}
          onPress={() => this.onPress(rowData)}
          component={TouchableOpacity}
        />
    )
  }

  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <ListView
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
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
  }
}

const mapDispatchToProps = {
  getAllChats,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
