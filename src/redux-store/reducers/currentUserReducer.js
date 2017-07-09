export default function (state = {}, action) {
  switch (action.type) {
    case 'REGISTER_PHONE_SUCCESS':
      let pin
      if (__DEV__) {
        pin = action.payload.data.pin
      }
      return {
        token: action.payload.data.token,
        pin,
      }
    // TODO: error handling
    case 'REGISTER_PHONE_FAIL':
      return state
    default:
      return state
  }
}
