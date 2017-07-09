import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: '5%',
    height: '10%',
    textAlign: 'center',
  },
  errorMsg: {
    color: 'red',
  },
})
