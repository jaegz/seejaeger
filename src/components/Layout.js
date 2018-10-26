import React from 'react'
import Helmet from 'react-helmet'
// import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import Navbar from '../components/Navbar'
import NavbarBottom from '../components/NavbarBottom'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="chrisjaeger.me" />
    <Navbar />
    {children}
    <NavbarBottom />
  </div>
)

export default TemplateWrapper
