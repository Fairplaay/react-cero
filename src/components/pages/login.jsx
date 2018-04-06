import React, { Component } from 'react'
import { login } from '../helpers/Auth'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginMessage: null
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleOnSubmit (ev) {
    ev.preventDefault()
    login(this.email.value, this.pass.value)
      .catch((err) => this.setState(this.setErrorMessage('Usuario o password Incorrectos')))
  }
  setErrorMessage (err) {
    return {loginMessage: err}
  }
  render () {
    return (
      <article className='Main-container'>
        <form onSubmit={this.handleOnSubmit}>
          <input type='email' placeholder='Correo electronico' ref={email => this.email = email} />
          <input type='password' placeholder='password' ref={pass => this.pass = pass} />
          {
            this.state.loginMessage &&
            <div className='error'>
              <p>
              error: {this.state.loginMessage}
              </p>
            </div>
          }
          <input type='submit' value='Login' />
        </form>
      </article>
    )
  }
}

export default Login
