import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenses from '../components/FormExpenses';

class Wallet extends React.Component {
  render() {
    const { emailName, totalField } = this.props;
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailName: state.user.email,
  totalField: state.wallet.totalField,
});

Wallet.propTypes = {
  emailName: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Wallet);
