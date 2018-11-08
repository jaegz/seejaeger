import React from 'react'
import { navigateTo } from 'gatsby-link';
import Layout from '../../components/Layout'
import SocialButtons from '../../components/SocialButtons'
import {
    Button, 
    Container,
    Form, 
    Grid,
    Header,
    Message,
    Segment,
    TextArea } from 'semantic-ui-react'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
        .then(() => navigateTo(form.getAttribute("action")))
        .catch(error => alert(error));
    };

    render() {
        return (
            <Layout>
                {/* <Grid centered verticalAlign='middle' style={{ marginBottom: '5em' }}> */}
                <Grid centered columns={2} style={{ height: '95vh', background:'url(../img/seglswitzerland.jpg) center', backgroundSize:'cover'}}>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Header as='h2' size='huge'>
                                    Let's get in touch
                                </Header>
                                <SocialButtons/>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Container>
                                <Segment color='olive'>
                                    <Form 
                                        name='chrisjaeger.me contact' 
                                        method='post'
                                        action='/success/'
                                        data-netlify='true'
                                        data-netlify-honeypot='bot-field'
                                        onSubmit={this.handleSubmit}
                                    >
                                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                        <input type='hidden' name='form-name' value='chrisjaeger.me contact' />
                                        
                                        <Form.Field hidden>
                                            <label>Don't fill this out:{" "}</label>
                                            <input name='bot-field' onChange={this.handleChange} />
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Name</label>
                                            <input name='name' placeholder='Name' onChange={this.handleChange}/>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Email</label>
                                            <input name='email' placeholder='your@email.com' onChange={this.handleChange}/>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label>Message</label>
                                            <TextArea name='message' placeholder='What would you like to say?' onChange={this.handleChange} />
                                        </Form.Field>
                                        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                                        <Message
                                            error
                                            header='Action Forbidden'
                                            content='You can only sign up for an account once with a given e-mail address.'
                                        />
                                        <Button color="olive" type='submit'>Send Message</Button>
                                    </Form>
                                </Segment>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}


// const ContactPage = () => (
//     <Layout>
//         <Grid centered verticalAlign='middle' style={{marginBottom: '5em'}}>
//             <Grid.Row>
//                 <Grid.Column>
//                     <Container textAlign='center'>
//                         <Header as='h2' size='huge'>
//                             Let's get in touch
//                             <Header.Subheader>Fill out the form below or reach out on one of these platforms:</Header.Subheader>
//                         </Header>

//                         <ul style={{display: 'inline-block'}}>
//                             <li>LinkedIn</li>
//                             <li>Twitter</li>
//                             <li>StackOverflow</li>
//                             <li>GitHUb</li>
//                             <li>Codepen</li>
//                         </ul>
//                     </Container>
//                 </Grid.Column>
//             </Grid.Row>
//             <Grid.Row>
//                 <Grid.Column>
//                     <Container>
//                         <Segment>
//                             <Form name='chrisjaeger.me contact' netlify netlify-honeypot='bot-field'>
//                                 <Form.Field hidden>
//                                     <input type='hidden' name='form-name' value='chrisjaeger.me contact'/>
//                                 </Form.Field>
//                                 <Form.Field hidden>
//                                     <input name='bot-field'/>
//                                 </Form.Field>
//                                 <Form.Field required>
//                                     <label>Name</label>
//                                     <input name='name' placeholder='Name' />
//                                 </Form.Field>
//                                 <Form.Field required>
//                                     <label>Email</label>
//                                     <input name='email' placeholder='your@email.com' />
//                                 </Form.Field>
//                                 <Form.Field required>
//                                     <label>Message</label>
//                                     <TextArea name='message' placeholder='What would you like to say?'/>
//                                 </Form.Field>
//                                 <Message success header='Form Completed' content="You're all signed up for the newsletter" />
//                                 <Message 
//                                     error
//                                     header='Action Forbidden'
//                                     content='You can only sign up for an account once with a given e-mail address.'
//                                 />
//                                 <Button type='submit'>Submit</Button>
//                             </Form>
//                         </Segment>
//                     </Container>
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid>
//     </Layout>
// )

// export default ContactPage