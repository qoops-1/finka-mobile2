import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '10%',
    textAlign: 'center',
  },
  errorMsg: {
    color: 'red',
  },
  touchableOpacity: {
    backgroundColor: '#7aedff',
    height: '10%',
    marginTop: '10%',
  },
  textDrawer: {
    color: 'black',
    fontSize: 30,
    marginTop: '5%',
    marginRight: '30%',
  },
})