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
  default:
    return { ...state, totalField: 0 };
  }
};

export default wallet;
