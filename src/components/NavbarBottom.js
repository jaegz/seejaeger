import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class NavbarBottom extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' fluid widths={4} fixed='bottom'>
        <Menu.Item name='home' href='/' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Icon name='home'/>
            Home
        </Menu.Item>
        <Menu.Item name='portfolio' href='/portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick}>
          <Icon name='folder open'/>
          Portfolio
        </Menu.Item>
        <Menu.Item name='blog' href='/blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>
          <Icon name='file alternate' />
          Blog
        </Menu.Item>
        <Menu.Item name='contact' href='/contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
          <Icon name='paper plane' />
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}
