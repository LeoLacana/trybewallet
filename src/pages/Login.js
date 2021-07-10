import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { keepEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationEmail: false,
      validationPassword: false,
    };
    this.validationEmail = this.validationEmail.bind(this);
    this.validationPassword = this.validationPassword.bind(this);
  }

  getEmail() {
    const email = document.getElementById('email-input').value;
    return email;
  }

  validationEmail({ target: { value } }) {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const check = regexEmail.test(value);
    this.setState({ validationEmail: check });
  }

  validationPassword({ target }) {
    const charactersPassword = 6;
    if (target.value.length >= charactersPassword) {
      this.setState({
        validationPassword: true,
      });
    }
  }

  render() {
    const { validationEmail, validationPassword } = this.state;
    const { sendEmailStore } = this.props;
    return (
      <>
        <div>Login</div>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            id="email-input"
            data-testid="email-input"
            onChange={ this.validationEmail }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            onChange={ this.validationPassword }
          />
        </label>
        <Link to="/carteira">
          <button
            type="submit"
            id="btnEnter"
            disabled={ !validationEmail || !validationPassword }
            onClick={ () => sendEmailStore(this.getEmail()) }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailStore: (email) => dispatch(keepEmail(email)),
});

Login.propTypes = {
  sendEmailStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
