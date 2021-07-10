import React, { Component } from 'react';

export default class FormExpenses extends Component {
  render() {
    return (
      <form>
        <label htmlFor="input-valor">
          Valor:
          <input type="text" id="input-valor" />
        </label>
        <label htmlFor="input-description">
          Descrição:
          <input type="text" id="input-description" />
        </label>
        <label htmlFor="input-select-currency">
          Moeda:
          <select id="input-select-currency">
            <option>1</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
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
