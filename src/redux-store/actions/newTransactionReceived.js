export default function (transaction) {
  return {
    type: 'NEW_TRANSACTION_RECEIVED',
    transaction,
  }
}
