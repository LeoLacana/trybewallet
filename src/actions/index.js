const KEEP_EMAIL = 'KEEP_EMAIL';
const SAVE_CURRENCIES_STATE = 'SAVE_CURRENCIES_STATE';
const SAVE_EXPENSE = 'SAVE_EXPENSE';
const SUM_EXPENSES = 'SUM_EXPENSES';

// Seta o email na store
export const keepEmail = (email) => ({
  type: KEEP_EMAIL,
  email,
});
// *********************

// Action para setar a API na store após a requisição
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
// **************************************************

// Seta a despesa na store
export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});
// ***********************

// Actions para somar a despesa convertida pela moeda selecionada

export function handleSumExpenses(value, sigla) {
  const convertedValue = (
    parseInt(value, 10) * parseFloat(sigla)
  );
  console.log(parseFloat(value));
  console.log(parseFloat(sigla));
  console.log(convertedValue);
  return {
    type: SUM_EXPENSES,
    payload: convertedValue,
  };
}
// **************************************************************
