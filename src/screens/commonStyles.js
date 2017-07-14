import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    alignSelf: 'stretch',
    marginRight: '5%',
    marginLeft: '5%',
    height: '10%',
    textAlign: 'center',
  },
  errorMsg: {
    color: 'red',
  },
})
