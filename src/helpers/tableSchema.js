const tableSchema = [
  {
    title: 'Transaction ID',
    depence: 'transaction_id',
    columns: [],
  },
  {
    title: 'User Info',
    depence: 'user_id',
    columns: [],
  },
  {
    title: 'Order Date',
    depence: 'created_at',
    columns: [],
  },
  {
    title: 'Order Amount',
    depence: 'total',
    columns: [],
  },
  {
    title: 'Card Number',
    depence: 'card_number',
    columns: [],
  },
  {
    title: 'Card Type',
    depence: 'card_type',
    columns: [],
  },
  {
    title: 'Location',
    depence: 'location',
    columns: [],
  }
];

export default tableSchema;