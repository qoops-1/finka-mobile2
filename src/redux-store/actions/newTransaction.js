
export default function (chat, payment) {
  return {
    type: 'NEW_TRANSACTION',
    payload: {
      request: {
        url: `/conversations/${chat.id}/transactions`,
        method: 'post',
        data: payment,
      },
    },
  }
}
