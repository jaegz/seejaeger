import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fluid widths={1}>
                <Menu.Item name='home' href='/' active={activeItem === 'home'} onClick={this.handleItemClick}>
                    <Icon name='terminal' />
                    chris jaeger 
                </Menu.Item>
            </Menu>
        )
    }
}