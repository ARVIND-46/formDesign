import React from 'react'
import '../styles/styles.css'
import Fbicon from'../img/fb.png'
import Inicon from'../img/instra.png'
import Ticon from '../img/twitter.png'
import Yicon from '../img/yt.png'

const Footer = () => {
  return (
   <div className='footer'>
    <p>Kpriet.edu.in</p>
    <img src={Fbicon} alt="" />
    <img src={Inicon} alt="" />
    <img src={Ticon} alt="" />
    <img src={Yicon} alt="" />
    <p>| KPRIET online</p>

   </div>
  )
}

export default Footer