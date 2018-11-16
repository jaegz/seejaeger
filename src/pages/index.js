import React from 'react'
import Layout from '../components/Layout'
import { Button, Container, Divider, Grid, Header } from 'semantic-ui-react';

const heroStyle = {
    height: '100vh',
    background: 'url(../img/aplineforestgermany.jpg) center', 
    backgroundSize: 'cover',
    paddingTop: '10em'
}

export default class IndexPage extends React.Component {
    render() {
        return (
        <Layout>
            <Grid centered>
                <Grid.Row style={heroStyle}>
                    <Grid.Column>
                        <Container text textAlign='center'>
                            <Header inverted as='h1' size='huge'>
                                A CRAFTSMAN OF THE WEB
                                <Header.Subheader>Hello, my name is Chris and I help companies deliver impactful digital experiences</Header.Subheader>
                            </Header>
                            <Divider/>
                            <Container text textAlign='center'>
                                <Button href='/portfolio' inverted color='olive' size='large'>See My Work</Button>
                                <Button href='/contact' inverted color='olive' size='large'>Get In Touch</Button>
                            </Container>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign='bottom' style={{ height: '100vh', background: 'url(../img/seglswitzerland.jpg) center', backgroundSize: 'cover' }}>
                </Grid.Row>
            </Grid>
        </Layout>
        )
    }
}