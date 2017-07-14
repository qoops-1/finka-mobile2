import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

const style = StyleSheet.create({
  menuLine: {
    height: 50,
    backgroundColor: '#5B88DA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
  },
  menuLineText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: '#3A6ECE',
  },
  separator: {
    backgroundColor: 'white',
    height: 1,
  },
  menu: {
    marginLeft: '5%',
  },
})

const menu = [
  {
    key: 1,
    name: 'Чаты',
    link: 'chats',
  },
  {
    key: 2,
    name: 'Добавить собеседника',
    link: 'addchat',
  },
  {
    key: 3,
    name: 'Настройки',
    link: 'settings',
  },
]

export default class Drawer extends React.Component {

  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.gotoScreen = this.gotoScreen.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
    });
  }

  gotoScreen(link) {
    this.toggleDrawer()
    this.props.navigator.handleDeepLink({
      link,
    })
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => this.gotoScreen(item.link)}>
        <View style={style.menuLine}>
          <Text style={style.menuLineText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={style.drawerContainer}>
        <FlatList
          style={style.menu}
          data={menu}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={style.separator} />}
        />
      </View>
    )
  }
}

Drawer.propTypes = {
  navigator: PropTypes.object.isRequired,
}

