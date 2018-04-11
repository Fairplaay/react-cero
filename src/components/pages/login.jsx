import React, { Component } from 'react'
import { login, resetPass } from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './login-register.css'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginMessage: null
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }
  handleOnSubmit (ev) {
    ev.preventDefault()
    login(this.email.value, this.pass.value)
      .catch((err) => this.setState(this.setMessage('Usuario o password Incorrectos')))
  }
  setMessage (err) {
    return {loginMessage: err}
  }

  resetPassword () {
    resetPass(this.email.value)
      .then(() => this.setState(this.setMessage(`Se ha enviado un correo electronico a <b>${this.email.value}</b> Para resstablecer tu contraseña`)))
      .catch((err) => this.setState(this.setMessage(`El email ${this.email.value} no se encuentra registrado`)))
  }

  render () {
    return (
      <article className='Main-container'>
        <h1>Login: </h1>
        <form className='pure-form AuthFork' onSubmit={this.handleOnSubmit}>
          <input type='email' placeholder='Correo electronico' ref={email => this.email = email} />
          <input type='password' placeholder='password' ref={pass => this.pass = pass} />
          {
            this.state.loginMessage &&
            <div className='u-error'>
              <p>
              error:&nbsp;&nbsp;{this.state.loginMessage}&nbsp;&nbsp;
                <a href='#' onClick={this.resetPassword} className='alert-link'>¿Olvidaste tu contraseña?</a>
              </p>
            </div>
          }
          <input className='pure-button pure-button-primary' type='submit' value='Login' />
        </form>
      </article>
    )
  }
}

export default Login
