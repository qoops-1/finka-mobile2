import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

export default function () {
  return (
    <View>
      <FlatList>
        <TouchableOpacity>
          <View>
            <Text>hello</Text>
          </View>
        </TouchableOpacity>
      </FlatList>
    </View>
  )
}
