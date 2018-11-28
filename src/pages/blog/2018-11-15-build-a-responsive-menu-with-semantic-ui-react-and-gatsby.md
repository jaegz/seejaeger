---
templateKey: blog-post
title: Build a responsive menu with Semantic UI React and Gatsby
date: 2018-11-15 22:10:05
description: >-
  Learn how to use Semantic UI React to build a modern responsive menu experience in Gatsby.
tags:
  - gatsbyjs
  - reactjs
  - semantic ui react
  - responsive
  - menu
  - navigation
  - dom
---

This post will go over the responsive menu experience I built for this website. Instead of the typical hambuger style drawer navigation for mobile, I wanted the site to feel more "app-like" with navigation tabs at the bottom of the viewport.

### Requirements

- [GatsbyJS](https://www.gatsbyjs.org)
- [Semantic UI React (SUIR)](https://react.semantic-ui.com)

## Part 1: Mobile Device Navigation Tab Component

Let's start by building out the tabs for mobile navigation by creating a new component called NavbarBottom.js in the src/components folder.

```js
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
        <Menu.Item as={Link} activeClassName='active' to='portfolio'>
          <Icon name='folder open' />
          Portfolio
        </Menu.Item>
        <Menu.Item as={Link} activeClassName='active' to='blog'>
          <Icon name='file alternate' />
          Blog
        </Menu.Item>
        <Menu.Item as={Link} activeClassName='active' to='contact'>
          <Icon name='paper plane' />
          Contact
        </Menu.Item>
      </Responsive>
    )
  }
}
```

With the `<Responsive>` SUIR component we can manipulate when this component is visible to the user. In this case, I wanted the navigation tabs to show up for smartphone and tablet devices. This was done by setting `maxWidth={Responsive.onlyTablet.maxWidth}`. The cool thing about this is this component will not be included in the DOM at larger device widths which avoid the redundancy of having two menus present in the DOM that are manipulated with CSS display/visibility rules. I also really like how SUIR allows you to pass in any SUIR component into another. For example, passing `<Menu>` into the `<Responsive>` 'as' prop. This works especially well when passing the the Gatsby `<Link>` component into the the `<Menu.Item>` to retain all the benefits of using Gatsby Link.

**Note: Offset the page by the height of the tabbed menu**

Add some css to offset the height of the tabbed menu or else it will cover up some of the bottom of the page.

## Part 2: Main Navigation Component

Now lets create the navigation menu that will be displayed on viewports larger than the tablet breakpoint. Create a new component in src/components called Navbar.js.

**A few details about the UI functionality before we begin:**

_Note to self: break this up into sections with animated gifs_

- On the homepage the svg logo and navigation text is white with a transparent background and no borders to display nice and clean on top of the large background image.
- When scrolling down the navigation becomes sticky with a border and a shadow, and the logo and text inverts from white to black.
- On all other pages those items are a darker color to show up on the white background.
- On mobile and tablet the navigation menu is not visible and the logo is centered.

```js
import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'
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
        menuFixed: false,
    }
    
    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: false })
    handleOnUpdate = (e, { width }) => this.setState({ width })

    render() {
        const { menuFixed, width } = this.state
        const menuWidths = width >= Responsive.onlyTablet.maxWidth ? null : 1
        const isHomepage = typeof window !== 'undefined' && window.location.pathname === withPrefix("/");

        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                offset={[0, -50]}
                once={false}
            >
            <Responsive as={Menu}  
                borderless
                inverted={menuFixed || !isHomepage ? false : true}
                fixed={'top'}
                style={menuFixed ? fixedMenuStyle : menuStyle}
                fireOnMount
                onUpdate={this.handleOnUpdate}
                widths={menuWidths}
            >
                <Container text >
                    <Menu.Item header as={Link} to='/'>
                        <Icon name='terminal' />
                        CHRIS JAEGER
                    </Menu.Item>
                 
                    <Responsive as={Menu.Menu} position='right' {...Responsive.onlyComputer}>
                        <Menu.Item as={Link} activeClassName='active' to='blog'>BLOG</Menu.Item>
                        <Menu.Item as={Link} activeClassName='active' to='portfolio'>PORTFOLIO</Menu.Item>
                        <Menu.Item as={Link} activeClassName='active' to='contact'>CONTACT</Menu.Item>
                    </Responsive>
                </Container>
            </Responsive>
        </Visibility>
        )
    }
}
```

no results when searching for _semantic ui responsive menu icon center_ This can help people with that.