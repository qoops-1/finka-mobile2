export default function (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_CHATS_SUCCESS': {
      return action.payload.data.conversations
    }
    case 'CREATE_CHAT_SUCCESS': {
      return [...state, action.data]
    }
    case 'NEW_TRANSACTION_SUCCESS': {
      const newTransaction = action.payload.data.transaction
      return state.map(chat => {
        if (chat.id === newTransaction.conversation_id) {
          return Object.assign({}, chat, { transactions: [newTransaction, ...chat.transactions] })
        }
        return chat
      })
    }
    default:
      return state
  }
}
