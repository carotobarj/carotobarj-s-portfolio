import React from 'react'
import img from '../../assets/images/profile.png'
import './Home.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

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
        <hr/>
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr/>
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
        Hello! 👋🏻 I am Carolina, I initially studied business administration and marketing. 

I am a person who seeks professional and personal growth, focused on teamwork, last year I made the decision to reinvent myself professionally so I started training in an area that I have always been passionate about; programming. 

As part of my training in web development I have developed competencies in: 
UX/UI, HTML, CSS, Sass, Gulp, JavaScript, Git, NodeJS, Express, React, Redux, SQL, Sequelize, Scrum.

Being a creative person I have focused on the frontend and UX/UI area, because I firmly believe that solutions can be solved efficiently where design, user experience and functionality are important parts in the development of any web application.

I consider that my background in marketing and business administration allows me to bring to organizations a comprehensive knowledge in terms of production processes, as well as experience in the area of customer service both internal and external, business creation, project development, management of students in educational environments, management of suppliers, good interpersonal relationships.
        </p>
      </h2>

      <Buttons />
    </div>
  )
}

export default Home