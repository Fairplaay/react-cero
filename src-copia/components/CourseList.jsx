import React from 'react'
import Courses from './Courses'
import AddForm from './AddForm'
const CouseList = (props) => (
  <div>
    <AddForm onAddCourse={props.onAddCourse} />
    <ul>
      {
        props.courses.map(el => (
          <Courses
            key={el.id}
            id={el.id}
            name={el.name}
            teacher={el.teacher}
          />))
      }
    </ul>
  </div>)

export default CouseList
