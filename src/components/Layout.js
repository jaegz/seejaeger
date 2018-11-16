import React from 'react'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import Navbar from '../components/Navbar'
import NavbarBottom from '../components/NavbarBottom'

const style = {
  // paddingTop: '4.3em',
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Front End Web Developer Portfolio | chrisjaeger.me" />
    <Navbar />
    <div style={style}>
      {children}
    </div>
    <NavbarBottom />
  </div>
)

export default TemplateWrapper
