import React from 'react'
import { Link } from 'react-router-dom'
import ContactButton from './Contact Us/ContactButton'

const Hero = () => {
    
    return (
        <article>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-7 image'>
                        </div>
                        <div className='col-5 title d-flex align-items-center'>
                            <div>
                                <h1>The <span>No. 1</span> Transport Booking App in the Philippines.</h1>
                                <Link to='/publicschedule'>View Public Bus Schedule</Link>
                            </div>
                        </div>
                    </div>      
                </div>
                <ContactButton/>
            </section>
        </article>
    )
}

export default Hero