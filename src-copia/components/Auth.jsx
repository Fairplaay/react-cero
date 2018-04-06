import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom'

const fakeAuth = {
  isAuntenticate: false,
  auntenticate (cb) {
    this.isAuntenticate = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuntenticate = false
    setTimeout(cb, 100)
  }
}

const Home = () => <h3>Home</h3>
const Public = () => <h3>Contenido público</h3>
const Protected = () => <h3>Contenido Protegido</h3>

const AuthButton = withRouter(({ history }) => (
  (fakeAuth.isAuntenticate) ? <div>
    <h2>Bienvenid@! :) </h2>
    <button onClick={() => fakeAuth.signout(() => history.push('/'))} />
  </div> : <h2>No estas logeado! :(</h2>
))

const PrivateRoute = ({component: Component, rest}) => (
  <Route {...rest} render={() => (
    (fakeAuth.isAuntenticate) ? <component {...props} /> : <Redirect to={{pathname: '/loging', state: {from: props.location}}} />
  )} />
)

class Login extends Component {
  constructor (...props) {
    super(...props)
    this.state = {
      redirectRoute: false
    }
    this.loging = this.loging.bind(this)
  }
  loging () {
    fakeAuth.isAuntenticate(() => this.setState({redirectRoute: true}))
  }
  render () {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const { redirectRoute } = this.state
    if (redirectRoute) {
      return (
        <Redirect to={from} />
      )
    } else {
      return (
        <div>
          <h3>Debes estar logeado para ver el contenido</h3>
          <mark>{from.pathname}</mark>
          <button onClick={this.login}>log in</button>
        </div>)
    }
  }
}

const AuthSite = (...props) => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/public`}>Sitio Publico</Link></li>
        <li><Link to={`/protected`}>Sitio protegido</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/public' exact component={Public} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/protected' exact component={Protected} />
      </Switch>
    </div>
  </Router>
)

export default AuthSite
