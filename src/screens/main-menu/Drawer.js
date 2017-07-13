import React from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, Image } from 'react-native'
import icons from '../../icons'
import commonStyle from '../commonStyles'


export default class Drawer extends React.Component {

  renderItem() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity activeOpacity={0.8} style={commonStyle.touchableOpacity} >
          <View style={commonStyle.container}>
            <Text style={commonStyle.textDrawer} >Hello</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        data={['Hi', 'bobby']}
        renderItem={this.renderItem}
      />
    )
  }
}
