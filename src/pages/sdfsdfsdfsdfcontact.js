import React from 'react'
import Layout from '../components/layout'

const ContactForm = () => {
    return (
        <Layout>
            <form name="Contact" method="POST" netlify>
                <p>
                    <label for="name">Your Name: 
                    <input type="text" id="name" name="name" /></label>   
                </p>
                <p>
                    <label for="email">Your Email:
                    <input type="email" id="email" name="email" /></label>
                </p>
                <p>
                    <label for="message">Message:
                    <textarea name="message" id="message"></textarea></label>
                </p>
                <p>
                    <button type="submit" value="Submit">Send</button>
                </p>
            </form>
        </Layout>
    )
}

export default ContactForm;