import React from 'react'
import '../styles/styles.css'
import logo from '../img/kpr.png'

const Header = () => {
  return (
   <div className='header'>
    <img src={logo}alt="" />
    <p>KPR Institute of Engineering and Technology</p>
    <div>
      <h1>IEEE</h1>
    </div>

   </div>
  )
}

export default Header