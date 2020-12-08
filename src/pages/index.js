import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h1>Welcome</h1>
          </header>
          <p>
            My name is Mario, I am Croatian, and I move to Vienna in 2020.
            Before that, I lived in Dublin for seven years and worked at
            Accenture as Senior Privacy Agent for Facebook.
            <br />
            <br />I started to get more interested in coding and signed up for
            the Web Developer Learning path at Codecademy. I thought it was
            exciting and I wanted to learn more. As I knew I was moving to
            Vienna in the summer, I signed up for the Developer Bootcamp at
            UpLeveled and finnished it.
            <br />
            <br /> UpLeveled specialized in Javascript, React, Node.js, and
            Next.js and there I built a few projects that you can see below..
          </p>
          <ul className="actions">
            <li>
              <a href="./cv" className="button">
                My CV
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Projects</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://github.com/Milkac-Design" className="button">
                Full GitHub Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            You like what you see here and also need a new Junior web developer
            to join your team? <br />
            Awesome, thats what I'm here for.
            <br /> Please do not hesitate to get in touch with any questions.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form action="https://formspree.io/f/mleowbdo" method="POST">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="_replyto"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Vienna
                  <br />
                  Austria
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  0043 677 637 00143
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">milkac88@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
