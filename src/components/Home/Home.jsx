import React from 'react'
import img from '../../assets/images/profile.jpg'
import './Home.css';
import Buttons from '../Button/Button';
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
      <h1>DOWNLOAD CV</h1>
      <Buttons />
      <br/>
      <h1>CERTIFICATES</h1>
      <Certificates />
    </div>
  )
}

export default Home