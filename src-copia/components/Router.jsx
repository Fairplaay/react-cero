import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

const StaticSite = () => (
  <Router>
    <div>
      <h1>Primeros pasos react router</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/acerca'>Acerca</Link></li>
          <li><Link to='/servicios'>Servicios</Link></li>
          <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
      </nav>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/acerca' component={Acerca} />
      <Route path='/servicios' component={Servicios} />
      <Route path='/contacto' component={Contacto} />
    </div>
  </Router>
)

const Home = () => (
  <h1>Home</h1>
)

const Acerca = () => (
  <div><h5>acerca de: JG...</h5></div>
)

const Servicios = () => (
  <div>
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
      <li>Polimer</li>
      <li>Ember</li>
    </ul>
  </div>
)

const Contacto = ({ match }) => (
  <div>
    <h5>Informacion de contacto</h5>
    <Route path={`${match.url}/:contactoInfo`} component={infoContacto} />
    <ul>
      <li><Link to={`${match.url}/email`}>Email</Link></li>
      <li><Link to={`${match.url}/web`}>Sitio web</Link></li>
      <li><Link to={`${match.url}/ubicacion`}>ubicacion</Link></li>
      <li><Link to={`${match.url}/github`}>Github</Link></li>
    </ul>
  </div>
)

const infoContacto = ({ match }) => (
  <div><h4>este es el parametro: {match.params.contactoInfo}</h4></div>
)
