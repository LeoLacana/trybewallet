import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenses from '../components/FormExpenses';
import { getCurrencies, saveExpense, handleSumExpenses } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: 0,
    };
    this.handleExpense = this.handleExpense.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    return fetchCurrencies();
  }

  async handleExpense() {
    const { fetchCurrencies, currencies, keepExpense, setTotalField } = this.props;
    const { idValue } = this.state;
    await fetchCurrencies();
    const objectExpense = {
      id: idValue,
      value: document.getElementById('input-value').value,
      description: document.getElementById('input-description').value,
      currency: document.getElementById('select-currency').value,
      method: document.getElementById('payment-method').value,
      tag: document.getElementById('expenses-type').value,
      exchangeRates: currencies[0],
    };
    this.setState({
      idValue: (idValue + 1),
    });

    keepExpense(objectExpense);
    setTotalField(objectExpense.value, currencies[0][`${objectExpense.currency}`].ask);
  }

  render() {
    const { newExpense } = this.state;
    const { emailName, totalField } = this.props;

    console.log(newExpense);

    return (
      <>
        <div>TrybeWallet</div>
        <header data-testid="email-field">
          <h3>{ emailName }</h3>
          <h3 data-testid="total-field">{ totalField }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <section>
          <FormExpenses />
        </section>
        <button
          onClick={ this.handleExpense }
          type="submit"
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailName: state.user.email,
  totalField: state.wallet.totalField,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  keepExpense: (newExpense) => dispatch(saveExpense(newExpense)),
  setTotalField: (expense, sigla) => dispatch(handleSumExpenses(expense, sigla)),
});

Wallet.propTypes = {
  emailName: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
  currencies: PropTypes.number.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  keepExpense: PropTypes.func.isRequired,
  setTotalField: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
