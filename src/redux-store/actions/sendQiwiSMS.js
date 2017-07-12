export default function () {
  return {
    type: 'QIWI_SMS',
    payload: {
      request: {
        url: '/qiwi_attach',
        method: 'get',
      },
    },
  }
}
