import React from 'react'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import '../styles/default.css'

export default () => (
  <div className="page-container">
    <NavBar>
      <Intro/>
    </NavBar>
  </div>
)
