import React from 'react'
import ChatForm from './ChatForm'

const ChatButton = () => {
    return (
        <aside className='contactUs'>
            <button className='contactBtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#contactUs" aria-controls="contactUs"><i className="bi bi-chat-fill"></i></button>
            <ChatForm/>
        </aside>
    )
}

export default ChatButton