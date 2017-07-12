
export default function (receiverNumber, amount) {
  return {
    type: 'QIWI_PAYMENT',
    payload: {
      request: {
        url: '/qiwi_payment',
        method: 'post',
        data: {
          phone: receiverNumber,
          ammount: amount,
        },
      },
    },
  }
}