import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormExpenses extends Component {
  render() {
    const { currencies } = this.props;
    const Moedas = (currencies.map((objectsCoins) => Object.values(objectsCoins)
      .filter((siglaFiltered) => siglaFiltered.codein !== 'BRLT')
      .map((siglaCurr) => <option key={ siglaCurr.code }>{siglaCurr.code}</option>)));

    return (
      <form>
        <label htmlFor="input-value">
          Valor:
          <input type="number" id="input-value" required />
        </label>
        <label htmlFor="input-description">
          Descrição:
          <input type="text" id="input-description" required />
        </label>
        <label htmlFor="select-currency">
          Moedas:
          <select id="select-currency">
            {Moedas}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method">
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Dinheiro</option>
          </select>
        </label>
        <label htmlFor="expenses-type">
          Tag:
          <select id="expenses-type">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(FormExpenses);
