import React from 'react'
import img from '../../assets/images/profile.png'
import './Home.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import About from '../About/About';
import Certificates from '../Certificates/Certificates';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img className='img' src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      <About />
      <h1 className='download'>DOWNLOAD CV</h1>
      <Buttons />
      <Certificates />
    </div>
  )
}

export default Home