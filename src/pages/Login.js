import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="email-input">
          Email
          <input type="text" id="email-input" data-testid="email-input" />
        </label>
        <label htmlFor="password-input">
          Senha
          <input type="text" id="password-input" data-testid="password-input" />
        </label>
        <button type="submit">Entrar</button>
      </>
    );
  }
}

export default Login;
