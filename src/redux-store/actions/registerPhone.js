
export default function (phone) {
  return {
    type: 'REGISTER_PHONE',
    payload: {
      request: {
        url: '/registration',
      },
    },
  }
}
