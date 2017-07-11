export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_ALL_CHATS_SUCCESS': {
      return action.payload.data.conversations
    }
    default:
      return state
  }
}
