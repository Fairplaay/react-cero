import React, { Component } from 'react'
import { data } from '../data/courses.json'
import CouseList from './CourseList'
import PropTypes from 'prop-types'
import uid from 'uid'
import $ from 'jquery'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      courses: []
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.resetData = this.resetData.bind(this)
  }
  handleOnAddCourse (e) {
    e.preventDefault()
    let form = e.target
    let course = {
      id: form.id.value,
      name: (form.name.value) ? form.name.value : App.defaultProps.name,
      teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
    }
    this.setState({courses: this.state.courses.concat([course])})
  }

  fetchData () {
    $('#app')
      .fadeOut(2000, () => {
        this.setState({courses: data})
      }).fadeIn()
  }
  resetData () {
    $('#app')
      .fadeOut(2000, () => {
        this.setState({courses: []})
      }).fadeIn()
  }

  componentDidMount () {
    this.fetchData()
  }

  render () {
    if (!this.state.courses.length) {
      return (
        <div>
          <p>No hay recursos :(</p>
        </div>
      )
    } else {
      return (
        <div>
          <CouseList courses={this.state.courses} onAddCourse={this.handleOnAddCourse} />
          <button onClick={this.resetData}>Borrar Cursos</button>
        </div>
      )
    }
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
  id: uid(10),
  name: 'Curso desconocido',
  teacher: 'Profesor no asignado'
}

export default App
