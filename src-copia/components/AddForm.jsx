import React from 'react'
import uid from 'uid'
const AddForm = (props) => (
  <form onSubmit={props.onAddCourse}>
    <input type='text' placeholder='Nombre del curso' name='name' required />
    <input type='text' placeholder='Profesor' name='teacher' required />
    <input type='hidden' name='id' value={uid(10)} />
    <input type='submit' value='Guardar' />
  </form>)

export default AddForm
