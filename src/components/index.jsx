import React, { Component } from 'react'
import { firebaseAuth } from '../data/config'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { logout } from './helpers/Auth'
// assets
import 'pure-css/lib/menus.css'
import './index.css'
import logo from './media/edteam-logo.png'
// rutas
import Home from '~/src/components/pages/index'
import dashboardCourses from './pages/protected/index'
import Acerca from './pages/about'
import Error404 from './pages/error404'
import Login from './pages/login'
import Register from './pages/register'

const PrivateRoute = ({component, authed, rest}) => (
  <Route
    {...rest}
    render={
      props => authed === true ? <component {...props} /> : <Redirect to={{patname: 'login', state: {from: props.location}}} />
    }
  />
)
const PublicRoute = ({component, authed, rest}) => (
  <Route
    {...rest}
    render={
      props => authed === true ? <component {...props} /> : <Redirect to='/cursos' />
    }
  />
)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authed: false,
      loading: false
    }
    this.hadleClick = this.hadleClick.bind(this)
  }
  hadleClick () {
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
    document.getElementById('toggle').classList.toggle('x')
  }

  componentDidMount () {

  }
  componentWillUnmount () {

  }

  render () {
    return this.state.loading === true
      ? (<h1>Cargando...</h1>)
      : (
        <Router>
          <div>
            <header className='custom-menu-wrapper'>
              <div className='pure-menu custom-menu custom-menu-top'>
                <a href='#' className='pure-menu-heading custom-menu-brand'>
                  <img className='edteam-logo' src={logo} alt='Edteam' />
                </a>
                <a href='#' className='custom-menu-toggle' id='toggle' onClick={this.hadleClick} ><s className='bar' /><s className='bar' /></a>
              </div>
              <div className='pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked' id='tuckedMenu'>
                <div className='custom-menu-screen' />
                <ul className='pure-menu-list'>
                  <li className='pure-menu-item'>
                    <Link to='/' className='pure-menu-link' onClick={this.hadleClick} >Home</Link>
                  </li>
                  <li className='pure-menu-item'>
                    <Link to='/acerca' className='pure-menu-link' onClick={this.hadleClick} >Acerca</Link>
                  </li>
                  {(this.state.authed)
                    ? <span>
                      <li className='pure-menu-item'>
                        <Link to='/cursos' className='pure-menu-link' onClick={this.hadleClick} >Cursos</Link>
                      </li>
                      <li className='pure-menu-item'>
                        <Link
                          to='/logout'
                          className='pure-menu-link'
                          onClick={() => {
                            logout()
                            this.state.authed = falses
                            this.hadleClick()
                          }} >Logout
                        </Link>
                      </li>
                    </span>
                    : <span>
                      <li className='pure-menu-item'>
                        <Link to='/registro' className='pure-menu-link' onClick={this.hadleClick} >Registro</Link>
                      </li>
                      <li className='pure-menu-item'>
                        <Link to='/login' className='pure-menu-link' onClick={this.hadleClick} >Login</Link>
                      </li>
                    </span>
                  }
                </ul>
              </div>
            </header>
            <main className='main-container'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route authed={this.state.authed} path='/acerca' component={Acerca} />
                <PublicRoute path='/login' component={Login} />
                <PublicRoute path='/registro' component={Register} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      )
  }
}

export default App
