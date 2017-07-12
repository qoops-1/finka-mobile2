export default function (pin) {
  return {
    type: 'VERIFY_QIWI',
    payload: {
      request: {
        url: '/qiwi_attach',
        method: 'post',
        data: {
          pin,
        },
      },
    },
  }
}
