import React from 'react'
import { render } from 'react-dom'
import App from '~/src/components/index.jsx'
import './index.css'
const app = document.getElementById('app')

// que voy a renderizar y donde lo hare
render(<App />, app)
