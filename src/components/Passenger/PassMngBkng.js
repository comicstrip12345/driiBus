import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux/es/exports'

const PassMngBkng = () => {
    const bookInfo = useSelector((state)=>state.booking.paymentBookStorageReceipt)
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
                                    <h1>Manage Bookings</h1>
                                </div>
                                {bookInfo?
                                    <div className='col-12 bookCard'>
                                        <div className='row'>
                                            <div className='col-3 company'>
                                                <h5>{bookInfo.paymentDetails.bookingDetail.busCompany}</h5>
                                            </div>
                                            <div className='col-6 route'>
                                                <p> {origin}<span>({bookInfo.paymentDetails.bookingDetail.startTime})</span><i className="bi bi-arrow-right-square"></i> {bookInfo.paymentDetails.bookingDetail.destination}<span>({bookInfo.paymentDetails.bookingDetail.endTime})</span></p>
                                            </div>
                                            <div className='col-3 price'>
                                                <p>P{bookInfo.paymentDetails.price}.00</p>
                                            </div>
                                            <div className='col-3 seats'>
                                                <p>Date: <span>{bookInfo.paymentDetails.bookingDetail.date}</span></p>
                                                <p>Receipt #: <span>{bookInfo.randomNumber}</span></p>
                                            </div>
                                            <div className='col-4 seats'>
                                                <p>Rest Stop: <span>{bookInfo.paymentDetails.bookingDetail.stop}</span></p>
                                                <p>Amenities: <span>Free Wifi, Free Snack</span></p>
                                            </div>
                                            <div className='col-3 seats'>
                                                <p>Total Seats: <span>{bookInfo.paymentDetails.bookingDetail.totalSeats}</span></p>
                                                <p>Seat Reserved: {bookInfo.paymentDetails.bookingDetail.passNames.map((item,index)=>(<span key={index}>{item.seat},</span>))}</p>
                                            </div>
                                            <div className='col-2 seats'>
                                                <p>Mode of Payment: <span>{bookInfo.paymentDetails.mode}</span></p>
                                            </div>
                                            <div className='col-3 qr'>
                                                <img src={require('./qr.png')} alt='qr'/>
                                            </div>
                                            <div className='col-7 passengers pt-4'>
                                                <h5 className='mb-3'>Passengers:</h5>
                                                {bookInfo.paymentDetails.bookingDetail.passNames.map((item,index)=>(
                                                    <div className='row' key={index}>
                                                        <div className='col-12 passenger'>
                                                            <p className='m-0'><span>{item.passName}</span><span>Seat {item.seat}</span><span>{item.gender}</span></p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div> 
                                        </div>
                                    </div>
                                :
                                    <p>ssasd</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default PassMngBkng