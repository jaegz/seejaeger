import React from 'react'
import Layout from '../../components/Layout'
import {Button, Form, TextArea } from 'semantic-ui-react'

const ContactPage = () => (
    <Layout>
        <div>
            <h1>Contact</h1>
            <p>Holler at me</p>
            <Form netlify-honeypot='bot-field' netlify>
                <Form.Field>
                    <label>Are you a Russian bot?</label>
                    <input name='bot-field'/>
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='your@email.com' />
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <TextArea placeholder='What would you like to say?'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>

    </Layout>
)

export default ContactPage