import React, { Component } from 'react'
import { Link } from 'gatsby'
import { 
  Icon,
  Menu,
  Responsive
} from 'semantic-ui-react'

export default class NavbarBottom extends Component {

  render() {

    return (
      <Responsive as={Menu} icon='labeled' fluid widths={4} fixed='bottom' maxWidth={Responsive.onlyTablet.maxWidth}>
        <Menu.Item as={Link} activeClassName='active' to='/'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as={Link} activeClassName='active' to='blog'>
          <Icon name='file alternate' />
          Blog
        </Menu.Item>
        <Menu.Item as={Link} activeClassName='active' to='portfolio'>
          <Icon name='folder open' />
          Portfolio
        </Menu.Item>
        <Menu.Item as={Link} activeClassName='active' to='contact'>
          <Icon name='paper plane' />
          Contact
        </Menu.Item>
      </Responsive>
    )
  }
}
