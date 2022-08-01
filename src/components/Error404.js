import React from 'react'

const Error404 = () => {
    return (
        <article>
            <section className='error'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 img'>
                            <img src={require('../photos/error.png')} alt='error404'/>
                            <button>Go Back</button>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Error404