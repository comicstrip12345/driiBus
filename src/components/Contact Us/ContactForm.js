import React from 'react'

const ContactForm = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="contactUs" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Chat<span>Box</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <h6>Hi. I'm <span>Adriano</span>, your customer service representative. How can I help?</h6>
            </div>
        </div>
    )
}

export default ContactForm