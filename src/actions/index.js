const KEEP_EMAIL = 'KEEP_EMAIL';
const SAVE_CURRENCIES_STATE = 'SAVE_CURRENCIES_STATE';
// const SUM_EXPENSES = 'SUM_EXPENSES';

export const keepEmail = (email) => ({
  type: KEEP_EMAIL,
  email,
});

export const saveCurrenciesState = (allCurrencies) => ({
  type: SAVE_CURRENCIES_STATE,
  payload: allCurrencies,
});

export function getCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesAPI = await response.json();

    dispatch(saveCurrenciesState(currenciesAPI));
  };
}

/* const sumExpenses = (value) => (
  {
    type: SUM_EXPENSES,
    value,
  }
); */
