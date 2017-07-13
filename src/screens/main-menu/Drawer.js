import React from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, Image } from 'react-native'
import icons from '../../icons'
import commonStyle from '../commonStyles'


export default class Drawer extends React.Component {

  renderItem() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={commonStyle.touchableOpacity} >
          <View style={commonStyle.container}>
            <Text style={commonStyle.textDrawer} >Hello</Text>
          </View>
        </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={['Hi', 'bobby']}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
