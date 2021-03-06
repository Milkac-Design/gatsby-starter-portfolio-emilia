import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Cv = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mario Milkovic</title>

      </Helmet>

      <div id="main">
        <h1>Mario Milkovic</h1>
        <div>
          <h2>Education</h2>
          <hr />
          <h3>UpLeveled GmbH – Vienna - Web Development Bootcamp</h3>
          <p>
            <p>September – November 2020</p>
            Full-stack web development bootcamp including HTML, CSS, JavaScript,
            React, Node.js, PostgreSQL, GitHub, Cypress Worked on my
            applications:
            <br />
            <a href="https://watcha-watchin.herokuapp.com/" target="blank">
              Watcha Watchin
            </a>{' '}
            – website to build your watch list and share your thoughts on movies
            with other users. My final project build with Next.js, database with
            PostgreSQL, API calls from Omdb, Cypress tested and deployed on
            Heroku
            <br />
            <a
              href="https://poptacular-ecommerce.herokuapp.com/"
              target="blank"
            >
              Poptacular E-commerce
            </a>{' '}
            – POP vinyl shop with all basic functionalities, build with Next.js,
            PostgreSQL, Cypress tested and deployed on Heroku
          </p>
          <h3>Berkeley Online Course - Bitcoin and Cryptocurrencies</h3>
          <p>
            <p>February 2020</p>
            Comprehensive and in-depth overview of the fundamental concepts of
            the crypto space, with a particular emphasis on Bitcoin
            <br />
            Understanding of the key strengths and distinguishing factors of
            blockchain versus traditional database systems
          </p>
          <h3>IBAT College Dublin – Java Programming Course</h3>
          <p>
            <p>2015 - 2015</p>
            Basic of programming and writing own programs, integrate input and
            output, calculations, loops in Java
          </p>
          <h3>Faculty of Tourism and Hospitality Management, Opatija</h3>
          <p>Bachelor Degree - Hotel Management</p>
          <p>2006 - 2010</p>
          <p>Major: Event and Leisure Management</p>
          <h2>Work Experience</h2>
          <hr />
          <h3>Accenture @ Facebook – Dublin, IE - Senior Privacy Agent</h3>
          <p>
            <p>November 2017–July 2020</p>
            Working as part of the Quality Assurance team and review closed
            tickets to ensure all processes are being followed
            <br />
            Be an expert on interpreting and enforcing Facebook's image privacy
            and data policies and use sound judgment, specific knowledge and
            insights to drive scalable solutions to support Facebook and its
            users
          </p>
          <h3>AIB Bank – Dublin, IE - Bank Official</h3>
          <p>
            <p>November 2016– October 2017</p>
            Strengthening client relationships by delivering for our clients and
            ensuring that all customer banking requests are processed accurately
            and in a timely manner
          </p>
          <h2>Personal Profile</h2>
          <hr />
          <h3>Languages</h3>
          <p>Croatian - Native</p>
          <p>English - Fluent</p>
          <p>German - Basic</p>
          <h3>Strengths</h3>
          <p>Attention to detail</p>
          <p>Quick problem silving</p>
          <p>Stress resistant</p>
          <h3>Skills</h3>
          <div className='progressbar'>
            <p>CSS: <progress max="100" value="80"></progress></p>
            <p>HTML: <progress max="100" value="80"></progress></p>
            <p>JavaScript: <progress max="100" value="60"></progress></p>
            <p>Next.js: <progress max="100" value="70"></progress></p>
            <p>PostgreSQL: <progress max="100" value="60"></progress></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Cv
