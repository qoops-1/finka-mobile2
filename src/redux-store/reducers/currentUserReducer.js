export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER_SUCCESS': {
      const { id, phone, name } = action.payload.data
      return Object.assign({}, state, { id, phone, name })
    }
    case 'REGISTER_PHONE_SUCCESS': {
      const { token, pin } = action.payload.data
      return Object.assign({}, state, { token, pin })
    }
    case 'VERIFY_QIWI_SUCCESS':
    case 'QIWI_SMS_SUCCESS':
    case 'VERIFY_PIN_SUCCESS': {
      const { token } = action.payload.data
      return Object.assign({}, state, { token })
    }
    default: {
      return state
    }
  }
}
