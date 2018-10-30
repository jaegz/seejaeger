import React from 'react'
import Layout from '../../components/Layout'
import {
    Button, 
    Container,
    Form, 
    Grid,
    Header,
    Message,
    Segment,
    TextArea } from 'semantic-ui-react'

const ContactPage = () => (
    <Layout>
        <Grid centered verticalAlign='middle' style={{marginBottom: '5em'}}>
            <Grid.Row>
                <Grid.Column>
                    <Container textAlign='center'>
                        <Header as='h2' size='huge'>
                            Let's get in touch
                            <Header.Subheader>Fill out the form below or reach out on one of these platforms:</Header.Subheader>
                        </Header>

                        <ul style={{display: 'inline-block'}}>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>StackOverflow</li>
                            <li>GitHUb</li>
                            <li>Codepen</li>
                        </ul>
                    </Container>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Container>
                        {/* Add action='pages/success' to redirect form submit
                        https://www.netlify.com/docs/form-handling/ */}
                        <Segment>
                            <Form name='chrisjaeger.me contact' method="POST" netlify-honeypot='bot-field' data-netlify="true">
                                <Form.Field hidden>
                                    <label>Are you a Russian bot?</label>
                                    <input name='bot-field'/>
                                </Form.Field>
                                <Form.Field required>
                                    <label>Name</label>
                                    <input placeholder='Name' />
                                </Form.Field>
                                <Form.Field required>
                                    <label>Email</label>
                                    <input placeholder='your@email.com' />
                                </Form.Field>
                                <Form.Field required>
                                    <label>Message</label>
                                    <TextArea placeholder='What would you like to say?'/>
                                </Form.Field>
                                <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                                <Message
                                    error
                                    header='Action Forbidden'
                                    content='You can only sign up for an account once with a given e-mail address.'
                                />
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Segment>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)

export default ContactPage