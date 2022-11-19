import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar'

const Passenger = () => {
    const user = useSelector((state)=>state.booking.login)
    return (
        <article>
          <section className='passenger'>
            <div className='container'>
              <div className='d-flex'>
                  <Sidebar
                      pathOpt1="/passenger"
                      pathOpt2="/passenger/bookings"
                      pathOpt3="/passenger/public"
                      opt1='Profile'
                      opt2='Manage Bookings'
                      opt3='Public Bus Schedule'
                  />
                  <div className='flex-fill otherbar' style={{width:"50vw"}}>
                      <div className='row'>
                          <div className='col-12 title'>
                              <h1>Your Passenger Profile</h1>
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

export default Passenger