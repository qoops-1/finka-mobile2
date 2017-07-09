export default function (pin) {
  return {
    type: 'VERIFY_PIN',
    payload: {
      request: {
        url: '/session',
        method: 'post',
        data: {
          pin,
        },
      },
    },
  }
}
