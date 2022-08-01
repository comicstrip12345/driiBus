import React from 'react'
import { useSelector } from 'react-redux'
import ModalPayment from './ModalPayment'

const Payment = () => {
    const bookingDetail = useSelector((state)=>state.booking.bookDetail)
    return (
        <article>
            <section className='payment'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 title'>
                            <h1>Select Payment</h1>
                        </div>
                        <div className='col-6 modes'>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Credit Card <span>(50% Discount)</span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <h5 className='mb-4'>
                                                Total Price:
                                                <span className='discP'>P{bookingDetail.totalprice * 0.50}.00</span> 
                                                <span className='totalP'>P{bookingDetail.totalprice}.00</span>
                                            </h5>
                                            <form>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="floatingInput" placeholder="username" />
                                                            <label for="floatingInput">Name on Card</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="floatingInput" placeholder="number" />
                                                            <label for="floatingInput">Card Number</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className="form-floating mb-3">
                                                            <input type="month" className="form-control" id="floatingInput" placeholder="month" />
                                                            <label for="floatingInput">Expiry Date</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="floatingInput" placeholder="number" />
                                                            <label for="floatingInput">CVV</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="floatingInput" placeholder="number" />
                                                            <label for="floatingInput">Zip Code</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 mt-2 mb-4 cardImg'>
                                                        <img src='https://pngimg.com/uploads/visa/visa_PNG1.png' alt='card'/>
                                                    </div>
                                                    <div className='col-6 mb-3 paybtn'>
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#card">Pay P{bookingDetail.totalprice * 0.50}.00</button>
                                                    </div>
                                                    <ModalPayment id='card' mode="Credit Card" price={bookingDetail.totalprice * 0.50}/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        G-Cash <span>(10% Discount)</span>
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                        <h5 className='mb-4'>
                                                Total Price:
                                                <span className='discP'>P{bookingDetail.totalprice * 0.90}.00</span> 
                                                <span className='totalP'>P{bookingDetail.totalprice}.00</span>
                                            </h5>
                                            <form>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="form-floating mb-3">
                                                            <input type="text" className="form-control" id="floatingInput" placeholder="username" />
                                                            <label for="floatingInput">GCash Name</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="floatingInput" placeholder="number" />
                                                            <label for="floatingInput">GCash Number</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className="form-floating mb-3">
                                                            <input type="number" className="form-control" id="floatingInput" placeholder="number" />
                                                            <label for="floatingInput">Zip Code</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 mt-2 mb-4 cardImg'>
                                                        <img src='https://www.freelogovectors.net/svg08/gcash-logo-freelogovectors.net_.svg' alt='card'/>
                                                    </div>
                                                    <div className='col-6 mb-3 paybtn'>
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#gcash">Pay P{bookingDetail.totalprice * 0.90}.00</button>
                                                    </div>
                                                    <ModalPayment id='gcash' mode='GCash' price={bookingDetail.totalprice * 0.90}/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 bookDetails'>
                            <div className='row'>
                                <div className='col-12 bookDetail'>
                                <div className='row bookCard'>
                                    <div className='col-12 p-0 title'>
                                        <h4>{bookingDetail.busCompany}</h4>
                                    </div>
                                    <hr/>
                                    <div className='col-12 p-0 depArrPass'>
                                        <div className='row'>
                                            <div className='col-1 icon d-flex align-items-center'>
                                                <i class="bi bi-calendar-check"></i>
                                            </div>
                                            <div className='col-3 detail'>
                                                <p className='m-0'>Departure</p>
                                                <h5 className='m-0'>{bookingDetail.origin}</h5>
                                            </div>
                                            <div className='col-5 detail'>
                                                <p className='m-0'>Date / Time</p>
                                                <h5 className='m-0'>{bookingDetail.date}</h5>
                                                <h5 className='m-0'>{bookingDetail.startTime}</h5>
                                            </div>
                                            <div className='col-3 detail'>
                                                <p className='m-0'>Total Seats</p>
                                                <h5 className='m-0'>{bookingDetail.totalSeats}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='col-12 p-0 depArrPass'>
                                        <div className='row'>
                                            <div className='col-1 icon d-flex align-items-center'>
                                            <i class="bi bi-geo-alt"></i>
                                            </div>
                                            <div className='col-3 detail'>
                                                <p className='m-0'>Arrival</p>
                                                <h5 className='m-0'>{bookingDetail.destination}</h5>
                                            </div>
                                            <div className='col-5 detail'>
                                                <p className='m-0'>Time</p>
                                                <h5 className='m-0'>{bookingDetail.endTime}</h5>
                                            </div>
                                            <div className='col-3 detail'>
                                                <p className='m-0'>Rest Stop</p>
                                                <h5 className='m-0'>{bookingDetail.stop}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-12 bookDetail'>
                                    <div className='row bookCard'>
                                        <div className='col-12 p-0 title'>
                                            <h4>Passengers ({bookingDetail.passNames.length})</h4>
                                        </div>
                                        <hr/>
                                        <div className='col-12 p-0 depArrPass'>
                                            {bookingDetail.passNames.map((item,index)=>(
                                                <div className='row passCard' key={index}>
                                                    <div className='col-1 icon d-flex align-items-center'>
                                                    <i class="bi bi-person"></i>
                                                    </div>
                                                    <div className='col-4 detail'>
                                                        <p className='m-0'>Name / Seat</p>
                                                        <h5 className='m-0'>{item.passName} <span>({item.seat})</span></h5>
                                                    </div>
                                                    <div className='col-4 detail'>
                                                        <p className='m-0'>Gender</p>
                                                        <h5 className='m-0'>{item.gender}</h5>
                                                    </div>
                                                    <div className='col-3 detail'>
                                                        <p className='m-0'>Price</p>
                                                        <h5 className='m-0'>P{item.prices}.00</h5>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 bookDetail'>
                                    <div className='row bookCard'>
                                        <div className='col-12 p-0 title'>
                                            <h4>Fares</h4>
                                        </div>
                                        <hr/>
                                        <div className='col-12 p-0 depArrPass' style={{marginBottom:'0'}}>
                                            <div className='row passCard'>
                                                <div className='col-1 icon d-flex align-items-center'>
                                                <i class="bi bi-person fare"></i>
                                                </div>
                                                <div className='col-8 detail'>
                                                    <p className='m-0'>Passengers</p>
                                                    <h5 className='m-0'>{bookingDetail.passNames.length}</h5>
                                                </div>
                                                <div className='col-3 detail'>
                                                    <p className='m-0'>Price</p> 
                                                    <h5 className='m-0'>P{bookingDetail.totalprice}.00</h5> 
                                                </div>
                                            </div>
                                            <hr style={{marginTop:'2vh'}}/>
                                            <div className='row passCard'>
                                                <div className='col-1'></div>
                                                <div className='col-3 detail'>
                                                    <h5 className='m-0'>Total</h5>
                                                </div>
                                                <div className='col-5'></div>
                                                <div className='col-2 detail'>
                                                    <h5 className='m-0'>P{bookingDetail.totalprice}.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Payment