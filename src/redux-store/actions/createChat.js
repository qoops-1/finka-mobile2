export default function (phoneNumbers) {
  return {
    type: 'CREATE_CHAT',
    payload: {
      request: {
        url: '/conversations',
        method: 'post',
        data: {
          user_phones: phoneNumbers,
        },
      },
    },
  }
}
