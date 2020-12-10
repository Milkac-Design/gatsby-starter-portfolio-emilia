import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="./" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Mario Milkovic</strong><br/> Junior web developer <br/> Specialized in Frontend, JavaScript, React, Next.js, CSS, based in Vienna
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
