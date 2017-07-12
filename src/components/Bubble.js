import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const style = StyleSheet.create({
  bubbleContainer: {
    marginRight: '40%',
    marginLeft: '1%',
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  text: {
    padding: 10,
  },
})
export default function (props) {
  return (
    <View style={[style.bubbleContainer, { backgroundColor: props.color }]}>
      <Text style={style.text}>{props.text}</Text>
    </View>
  )
}
