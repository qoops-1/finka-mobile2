export default function () {
  return {
    type: 'GET_ALL_CHATS',
    payload: {
      request: {
        url: '/conversations',
        method: 'get',
      },
    },
  }
}
