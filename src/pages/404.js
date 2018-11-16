import React from 'react'
import Layout from '../components/Layout'
// import NavbarBottom from '../components/NavbarBottom'
import {
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react'

const NotFoundPage = () => (
  <Layout>
    <Grid centered style={{ background: 'url(/img/lostinthedesert.jpg) center', backgroundSize: 'cover', height: '100vh' }}>
      <Grid.Column mobile={16} tablet={14} computer={8} widescreen={6}>
        <Container>
          <Segment textAlign='center'>
            <Icon name='warning circle' size='huge' />
            <Header as='h1'>
              404 : NOT FOUND
            </Header>
            <p style={{fontSize: '1.3em'}}>There's nothing here... give one of these pages a try:</p>
            <Menu icon='labeled' fluid widths={4}>
              <Menu.Item name='home' href='/' >
                Home
              </Menu.Item>
              <Menu.Item name='portfolio' href='/portfolio'>
                Portfolio
              </Menu.Item>
              <Menu.Item name='blog' href='/blog'>
                Blog
              </Menu.Item>
              <Menu.Item name='contact' href='/contact'>
                Contact
              </Menu.Item>
            </Menu>
          </Segment>
        </Container>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default NotFoundPage
