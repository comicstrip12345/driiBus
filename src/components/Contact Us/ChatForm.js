import React from 'react'

const ChatForm = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="contactUs" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Chat<span>Box</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <h6>Hi. I'm <span>Adriano</span>, your Customer Service Representative. How can I help? <br/> Say <span>Hi</span> to start.</h6>
                <div className='row'>
                    <div className='col-12 form'>
                        <form>
                            <div className='row'>
                                <div className='col-12'>
                                    <p>Hello</p>
                                </div>
                                <div className='col-12'>
                                    <p>Good Morning</p>
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Chat"/>
                                <label for="floatingInput">Chat</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatForm