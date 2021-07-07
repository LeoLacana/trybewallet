import React from 'react';

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
    return (
      <>
        <div>
          Login
        </div>
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
        <button
          type="submit"
          id="btnEnter"
          disabled={ !validationEmail || !validationPassword }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
