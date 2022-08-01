import React from 'react'
import ContactForm from './ContactForm'

const ContactButton = () => {
    return (
        <aside className='contactUs'>
            <button className='contactBtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#contactUs" aria-controls="contactUs"><i className="bi bi-chat-fill"></i></button>
            <ContactForm/>
        </aside>
    )
}

export default ContactButton