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
    TextArea 
} from 'semantic-ui-react'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
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
                <Grid centered style={{ height: '95vh', background:'url(../img/seglswitzerland.jpg) center', backgroundSize:'cover'}}>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column mobile={16} tablet={8} computer={6} widescreen={4}>
                            <Container textAlign='center'>
                                <Header as='h2' size='huge'>
                                    Let's get in touch
                                </Header>
                                <SocialButtons/>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={8} computer={6} widescreen={4}>
                            <Container>
                                <Segment color='olive'>
                                    <Form 
                                        name='chrisjaeger.me contact' 
                                        method='post'
                                        action='/contact/thanks'
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
                                            <label htmlFor={'name'}>Name</label>
                                            <input type={'text'} name={'name'} placeholder={'Name'} onChange={this.handleChange} required={true}/>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label htmlFor={'email'}>Email</label>
                                            <input type={'email'} name={'email'} placeholder={'your@email.com'} onChange={this.handleChange} required={true}/>
                                        </Form.Field>
                                        <Form.Field required>
                                            <label htmlFor={'message'}>Message</label>
                                            <TextArea name={'message'} placeholder={'What would you like to say?'} onChange={this.handleChange} required={true}/>
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