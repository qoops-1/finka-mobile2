export default function () {
  return {
    type: 'GET_CURRENT_USER',
    payload: {
      request: {
        url: '/user',
        method: 'get',
      },
    },
  }
}
