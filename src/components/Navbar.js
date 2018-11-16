import React, { Component } from 'react'
import { 
    Container,
    Icon,
    Menu,
    Responsive,
    Visibility
} from 'semantic-ui-react'

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    backgroundColor: 'transparent',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}


export default class Navbar extends Component {
    state = { 
        activeItem: 'home',
        menuFixed: false,
    }
    
    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: false })
    handleOnUpdate = (e, { width }) => this.setState({ width })

    render() {
        const { activeItem, menuFixed, width } = this.state
        const menuWidths = width >= Responsive.onlyComputer.minWidth ? null : 1

        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                offset={[0, -50]}
                once={false}
            >
            <Responsive as={Menu}  
                borderless
                inverted={menuFixed ? false : true}
                style={menuStyle}
                fixed={'top'}
                style={menuFixed ? fixedMenuStyle : menuStyle}
                onUpdate={this.handleOnUpdate}
                widths={menuWidths}
            >
                <Container text >
                    <Menu.Item header>
                        <Icon name='terminal' />
                        CHRIS JAEGER
                    </Menu.Item>
                    <Responsive as={Menu.Menu} position='right' {...Responsive.onlyComputer}>
                        <Menu.Item name='home' href='/' active={activeItem === 'home'} onClick={this.handleItemClick}>
                            HOME
                        </Menu.Item>
                        <Menu.Item name='portfolio' href='/portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick}>
                            PORTFOLIO
                        </Menu.Item>
                        <Menu.Item name='blog' href='/blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>
                            BLOG
                        </Menu.Item>
                        <Menu.Item name='contact' href='/contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
                            CONTACT
                        </Menu.Item>
                    </Responsive>
                </Container>
            </Responsive>
        </Visibility>
        )
    }
}