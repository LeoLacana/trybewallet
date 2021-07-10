const KEEP_EMAIL = 'KEEP_EMAIL';
// const SUM_EXPENSES = 'SUM_EXPENSES';

const keepEmail = (email) => (
  {
    type: KEEP_EMAIL,
    email,
  }
);

/* const sumExpenses = (value) => (
  {
    type: SUM_EXPENSES,
    value,
  }
); */

export default keepEmail;
