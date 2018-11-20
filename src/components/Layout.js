import React from 'react'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
// import './Layout.css'
import Navbar from '../components/Navbar'
import NavbarBottom from '../components/NavbarBottom'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Front End Web Developer Portfolio | chrisjaeger.me" />
    <Navbar/>
    {children}
    <NavbarBottom />
  </div>
)

export default TemplateWrapper
