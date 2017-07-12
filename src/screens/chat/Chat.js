import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

const style = StyleSheet.create({
  sendBtn: {
    height: '100%',
    backgroundColor: '#00a8fc',
    width: '100%',
  },
  sendText: {
    textAlign: 'center',
    color: 'white',
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});

class Chat extends React.Component {

  static renderCustomAction() {
    return (
      <TouchableOpacity style={{ width: '100%' }} onPress={this.onPressActionButton}>
        <View style={style.sendBtn}>
          <Text style={style.sendText}>Новая операция</Text>
        </View>
      </TouchableOpacity>
    )
  }

  static renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            borderRadius: 5,
            backgroundColor: '#f0f0f0',
          },
          right: {
            borderRadius: 5,
            backgroundColor: '#405ced',
          },
        }}
      />
    );
  }

  static getConvertedMessages(chat) {
    return chat.transactions.map(({ id, comment, created_at, ammount, user_id }) => {
      return {
        _id: id,
        text: `Перевод   ${ammount}руб.\n----------\n  ${comment}`,
        createdAt: new Date(created_at),
        user: {
          _id: user_id,
        },
      }
    })
  }

  constructor(props) {
    super(props)
    this.onPressActionButton = this.onPressActionButton.bind(this)
  }

  onPressActionButton() {
    Navigation.showModal({
      screen: 'finka.Payment',
      passProps: { chat: this.props.chat },
    })
  }

  render() {
    return (
      <GiftedChat
        messages={Chat.getConvertedMessages(this.props.chat)}
        locale='ru'
        user={{ _id: 2 }}
        renderBubble={Chat.renderBubble}
        renderComposer={() => <Text />}
        renderActions={Chat.renderCustomAction}
        onPressActionButton={this.onPressActionButton}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.currentUser,
    chat: state.chats.find(({ id }) => id === ownProps.chosenChatID),
  }
}

export default connect(mapStateToProps)(Chat)
