import React from 'react'
import './Home.css';
import Buttons from '../Button/Button';
import { BsMouse } from 'react-icons/bs';
import About from '../About/About';
import Certificates from '../Certificates/Certificates';

function Home() {
  return (
    <div id='home' className='container home-container'>
      

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