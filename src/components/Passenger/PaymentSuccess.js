import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactToPdf from 'react-to-pdf'
import { addReceiptNum } from '../Redux/busSlice'

const PaymentSuccess = () => {
    const paymentDetails = useSelector((state)=>state.booking.paymentBookStorage)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const componentRef = React.createRef()
    const randomNumber = Math.floor(Math.random()*10000)
    const onNavAcct = (e)=>{
        e.preventDefault()
        dispatch(addReceiptNum({paymentDetails,randomNumber}))
        navigate('/passenger/bookings')
        window.location.reload()
    }
    return (
        <article>
            <section className='success' ref={componentRef}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 qr d-flex align-items-center'>
                            <img src={require('./qr.png')} alt='qr'/>
                        </div>
                        <div className='col-6 details'>
                            <h1>Success!!</h1>
                            <h5 className='receipt'>Receipt #: <span>{randomNumber}</span></h5>
                            <div className='row busCard'>
                                <div className='col-12 bus'>
                                    <div className='row'>
                                        <div className='col-12 menu'>
                                            <h3>{paymentDetails.bookingDetail.busCompany}</h3>
                                        </div>
                                        <div className='col-3 menu'>
                                            <h5 className='m-0'>Departure:</h5>
                                        </div>
                                        <div className='col-4 value'>
                                            <p className='m-0'>{paymentDetails.bookingDetail.origin}</p>
                                        </div>
                                        <div className='col-2 menu'>
                                            <h5 className='m-0'>Time:</h5>
                                        </div>
                                        <div className='col-1 value'>
                                            <p className='m-0'>{paymentDetails.bookingDetail.startTime}</p>
                                        </div>
                                        <div className='col-3 menu'>
                                            <h5 className='m-0'>Arrival:</h5>
                                        </div>
                                        <div className='col-4 value'>
                                            <p className='m-0'>{paymentDetails.bookingDetail.destination}</p>
                                        </div>
                                        <div className='col-2 menu'>
                                            <h5 className='m-0'>Time:</h5>
                                        </div>
                                        <div className='col-1 value'>
                                            <p className='m-0'>{paymentDetails.bookingDetail.endTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ReactToPdf targetRef={componentRef} filename="driibus.pdf"  x={.5} y={.5} scale={0.6}>
                                {({toPdf}) => (
                                    <button onClick={toPdf} className='prntBtn'>Download receipt</button>
                                )}
                            </ReactToPdf>
                            <button onClick={onNavAcct} className='prntBtn'>Your Account</button>
                        </div>
                        <div className='col-12 passenger'>
                            <div className='row'>
                                <div className='col-12 title'>
                                    <h2>Passenger Details</h2>
                                </div>
                                <div className='col-3 menu'>
                                    <h4>Name</h4>
                                </div>
                                <div className='col-3 menu'>
                                    <h4>Seat Number</h4>
                                </div>
                                <div className='col-3 menu'>
                                    <h4>Gender</h4>
                                </div>
                                <div className='col-3 menu'>
                                    <h4>Price</h4>
                                </div>
                            </div>
                            {paymentDetails.bookingDetail.passNames.map((item,index)=>(
                                <div className='row passCard' key={index}>
                                    <div className='col-3 value'>
                                        <p className='m-0'>{item.passName}</p>
                                    </div>
                                    <div className='col-3 value'>
                                        <p className='m-0'>{item.seat}</p>
                                    </div>
                                    <div className='col-3 value'>
                                        <p className='m-0'>{item.gender}</p>
                                    </div>
                                    <div className='col-3 value'>
                                        <p className='m-0'>P{item.prices}.00</p>
                                    </div>
                                </div>
                            ))}
                            <hr/>
                            <div className='row passCard'>
                                <div className='col-3 price'>
                                    <h4 className='m-0'>Total:</h4>
                                </div>
                                <div className='col-3 price'>
                                </div>
                                <div className='col-3 price'>
                                </div>
                                <div className='col-3 price'>
                                    <h4 className='m-0'>P{paymentDetails.price}.00 <span>P{paymentDetails.bookingDetail.totalprice}.00</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default PaymentSuccess