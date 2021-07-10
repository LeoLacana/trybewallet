const INITIAL_STATE = {
  curries: [],
  expenses: [],
  totalField: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUM_EXPENSES':
    return {
      ...state,
      expenses: wallet.expenses + action.value,
    };
  default:
    return { ...state, totalField: 0 };
  }
};

export default wallet;
