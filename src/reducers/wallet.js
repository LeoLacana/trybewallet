const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_CURRENCIES_STATE':
    return {
      ...state,
      currencies: [action.payload],
    };
  case 'SAVE_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'SUM_EXPENSES':
    return {
      ...state,
      totalField: state.totalField + action.payload,
    };
  default:
    return { ...state, totalField: 0 };
  }
};

export default wallet;
