import React, { Component } from 'react'
import { firebaseAuth } from '../data/config'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
// assets
import 'purecss'
import './index.css'
import logo from './media/edteam-logo.png'
// rutas
import Home from '~/src/components/pages/index'
import Protegida from './pages/protected/index'
import Acerca from './pages/about'
import Error404 from './pages/error404'
import Login from './pages/login'
import Register from './pages/register'

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
  render () {
    return this.state.loading === true
      ? (<h1>Cargando...</h1>)
      : (
        <Router>
          <div>
            <header className='custom-menu-wrapper'>
              <div className='pure-menu custom-menu custom-menu-top'>
                <a href='#' className='pure-menu-heading custom-menu-brand'>
                  <img src={logo} alt='Edteam' />
                </a>
                <a href='#' className='custom-menu-toggle' id='toggle' onClick={this.hadleClick} ><s className='bar'></s><s className='bar'></s></a>
              </div>
              <div className='pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked' id='tuckedMenu'>
                <div className='custom-menu-screen'></div>
                <ul className='pure-menu-list'>
                  <li className='pure-menu-item'>
                    <Link to='/' className='pure-menu-link' onClick={this.hadleClick} >Home</Link>
                  </li>
                  <li className='pure-menu-item'>
                    <Link to='/acerca' className='pure-menu-link' onClick={this.hadleClick} >Acerca</Link>
                  </li>
                  <li className='pure-menu-item'>
                    <Link to='/registro' className='pure-menu-link' onClick={this.hadleClick} >Registro</Link>
                  </li>
                  <li className='pure-menu-item'>
                    <Link to='/login' className='pure-menu-link' onClick={this.hadleClick} >Login</Link>
                  </li>
                </ul>
              </div>
            </header>
            <main className='Main'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/acerca' component={Acerca} />
                <Route path='/login' component={Login} />
                <Route path='/registro' component={Register} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      )
  }
}

export default App
