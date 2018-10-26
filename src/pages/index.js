import React from 'react'
import Layout from '../components/Layout'
import { Button, Container, Divider, Grid, Header } from 'semantic-ui-react';

export default class IndexPage extends React.Component {
    render() {
        return (
        <Layout>
            <Grid centered style={{ height: '88vh', background:'url(../img/aplineforestgermany.jpg) center', backgroundSize:'cover'}}>
                <Grid.Row verticalAlign='bottom'>
                    <Grid.Column>
                        <Container textAlign='center'>
                            <Header inverted as='h2' size='huge'>
                                A CRAFTSMAN OF THE WEB
                                <Header.Subheader>Hello, my name is Chris and I help companies deliver impactful digital experiences</Header.Subheader>
                            </Header>
                            <Divider/>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign='top'>
                    <Grid.Column>
                        <Container textAlign='center'>
                            <Button href='/portfolio' inverted color='olive' size='large'>See My Work</Button>
                            <Button href='/contact' inverted color='olive' size='large'>Get In Touch</Button>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
        )
    }
}