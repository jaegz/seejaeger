import React from 'react'
import Layout from '../../components/Layout'
import SocialButtons from '../../components/SocialButtons'
import {
    Button, 
    Container, 
    Divider, 
    Header, 
    Icon, 
    Grid, 
    Segment 
} from 'semantic-ui-react'

const SuccessPage = () => (
    <Layout>
        <Grid centered style={{ height: '95vh', background:'url(../img/seglswitzerland.jpg) center', backgroundSize:'cover'}}>
            <Grid.Column mobile={16} tablet={8} computer={6} widescreen={4}>
                <Container textAlign='center'>
                    <Segment color='olive' style={{marginTop: '5em'}}>
                        <Header as='h2' size='huge'>
                            Thanks for reaching out
                            <Divider/>
                            <Header.Subheader>I'll get back to you soon.</Header.Subheader>
                        </Header>
                        <Button color='olive' href='/'><Icon name='home'/>Return home</Button>
                    </Segment>
                    <SocialButtons/>
                </Container>
            </Grid.Column>
        </Grid>
    </Layout>
)

export default SuccessPage