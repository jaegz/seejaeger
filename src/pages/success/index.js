import React from 'react'
import Layout from '../../components/Layout'
import {Button, Container, Divider, Header, Icon, Grid, Segment } from 'semantic-ui-react'

const SuccessPage = () => (
    <Layout>
        <Grid centered columns={2} style={{ height: '95vh', background:'url(../img/seglswitzerland.jpg) center', backgroundSize:'cover'}}>
            <Grid.Column>
            <Container textAlign='center'>
                <Segment style={{marginTop: '5em'}}>
                    <Header as='h2' size='huge'>
                        Thanks for reaching out
                        <Divider/>
                        <Header.Subheader>I'll get back to you soon.</Header.Subheader>
                    </Header>
                        <Button color='olive'><Icon name='home'/>Return home</Button>
                </Segment>
                <Button circular inverted color='white' size='large' href='https://www.linkedin.com/in/christopher-jaeger/' icon='linkedin' />
                <Button circular inverted color='white' size='large' href='https://twitter.com/seejaeger' icon='twitter' />
                <Button circular inverted color='white' size='large' href='https://stackoverflow.com/users/2561435/jaegs' icon='stack overflow' />
                <Button circular inverted color='white' size='large' href='https://github.com/jaegz' icon='github' />
                <Button circular inverted color='white' size='large' href='https://codepen.io/jaegs/' icon='codepen' />

            </Container>
            </Grid.Column>
        </Grid>
    </Layout>
)

export default SuccessPage