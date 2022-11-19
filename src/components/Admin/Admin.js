import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux'

const Admin = () => {
    const user = useSelector((state)=>state.booking.login)
    return (
        <article>
            <section className="admin">
                <div className="container">
                    <div className='d-flex'>
                        <Sidebar
                            pathOpt1="/admin"
                            pathOpt2="/admin/schedule"
                            pathOpt3="/admin/public"
                            opt1='Profile'
                            opt2='Bus Schedule'
                            opt3='Public'
                        />
                        <div className='flex-fill otherbar' style={{width:"50vw"}}>
                            <div className='row'>
                                <div className='col-12 title'>
                                    <h1>Your Admin Profile</h1>
                                </div>
                                <div className='col-3 profileTitle mb-4'>
                                    <h5>Name:</h5>
                                </div>
                                <div className='col-9 profileInfo'>
                                    <p>{user.name}</p>
                                </div>
                                <div className='col-3 profileTitle mb-4'>
                                    <h5>Username:</h5>
                                </div>
                                <div className='col-9 profileInfo'>
                                    <p>{user.username}</p>
                                </div>
                                <div className='col-3 profileTitle mb-4'>
                                    <h5>Email Address:</h5>
                                </div>
                                <div className='col-9 profileInfo'>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Admin