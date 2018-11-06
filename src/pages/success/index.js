import React from 'react'
import Layout from '../../components/Layout'
import {Container, Header, Grid, Segment } from 'semantic-ui-react'

const SuccessPage = () => (
    <Layout>
        <Grid centered>
            <Container>
                <Segment style={{marginTop: '5em'}}>
                    <Header>
                        Thanks for reaching out!
                        <Header.Subheader>Click here to return to the home page or something like that</Header.Subheader>
                    </Header>
                </Segment>
            </Container>
        </Grid>
    </Layout>
)

export default SuccessPage