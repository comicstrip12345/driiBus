import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux'

const AdminPublicSchedule = () => {
    const schedules = useSelector((state)=>state.booking.scheduleStorage)
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
                        <div className='flex-fill otherbar' style={{width:"55vw"}}>
                            <div className='row'>
                                <div className='col-12 title'>
                                    <h1>Public Bus Schedule</h1>
                                </div>
                                {schedules?
                                    <>
                                        {schedules.map((item,index)=>(
                                        <div className='col-12 bookCard' key={index}>
                                            <div className='row'>
                                                <div className='col-3 company'>
                                                    <h5>{item.busCompany}</h5>
                                                </div>
                                                <div className='col-6 route'>
                                                    <p>{item.origin} <span>({item.startTime})</span><i class="bi bi-arrow-right-square"></i>{item.destination} <span>({item.endTime})</span></p>
                                                </div>
                                                <div className='col-3 price'>
                                                    <p>P{item.price}.00</p>
                                                </div>
                                                <div className='col-3 seats'>
                                                    <p>Date: <span>{item.date}</span></p>
                                                </div>
                                                <div className='col-4 seats'>
                                                    <p>Rest Stop: <span>{item.stop}</span></p>
                                                    <p>Amenities: <span>Free Wifi, Free Snack</span></p>
                                                </div>
                                                <div className='col-4 seats'>
                                                    <p>Total Seats: <span>{item.totalSeats}</span></p>
                                                    <p>Available Seats: <span>{item.seatAvail}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>:
                                <div className='col-12 nosched'>
                                    <img src={require('../../photos/no-schedule.png')} alt='nosched'/>
                                    <p>No Schedule yet</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default AdminPublicSchedule