import React from 'react'
import Layout from '../components/layout'

const ContactForm = () => {
    return (
        <Layout>
            <form name="ContactForm" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
                <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </Layout>
    )
}

export default ContactForm;