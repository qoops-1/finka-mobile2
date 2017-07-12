export default function (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_CHATS_SUCCESS': {
      return action.payload.data.conversations
    }
    case 'CREATE_CHAT_SUCCESS': {
      return [...state, action.data]
    }
    case 'CREATE_CHAT_FAIL': {
      return state
    }
    case 'GET_ALL_CHATS_FAIL': {
      return state
    }
    default:
      return state
  }
}
