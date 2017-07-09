export default function (state = {}, action) {
  switch (action.type) {
    case 'REGISTER_PHONE_SUCCESS': {
      const { token, pin } = action.payload.data
      return Object.assign({}, state, { token, pin })
    }
    case 'REGISTER_PHONE_FAIL': {
      return state
    }
    case 'VERIFY_PIN_SUCCESS': {
      const { token } = action.payload.data
      return Object.assign({}, state, { token })
    }
    case 'VERIFY_PIN_FAIL': {
      return state
    }
    default: {
      return state
    }
  }
}
