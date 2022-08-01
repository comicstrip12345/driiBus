import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addPayBookDetails} from '../Redux/busSlice'
import { useNavigate } from 'react-router-dom'

const ModalPayment = ({id,mode,price}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bookingDetail = useSelector((state)=>state.booking.bookDetail)
    const {busCompany,origin, startTime,destination,endTime,date,passNames} = bookingDetail
    const onPaySubmit=(e)=>{
        e.preventDefault()
        dispatch(addPayBookDetails({
            bookingDetail,mode,price
        }))
        Swal.fire({
            icon:'success',
            title:'Successfully booked. Please go to MANAGE BOOKINGS to manage your bookings.'
        })
        navigate('/passenger/payment/success')
        window.location.reload()
    }
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Review you Book Information</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='mb-3'>{busCompany}</h3>
                        </div>
                        <div className='col-3'>
                            <h5>Departure:</h5>
                        </div>
                        <div className='col-4'>
                            <p>{origin}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Start Time:</h5>
                        </div>
                        <div className='col-2'>
                            <p>{startTime}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Arrival:</h5>
                        </div>
                        <div className='col-4'>
                            <p>{destination}</p>
                        </div>
                        <div className='col-3'>
                            <h5>End Time:</h5>
                        </div>
                        <div className='col-2'>
                            <p>{endTime}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Date:</h5>
                        </div>
                        <div className='col-4'>
                            <p>{date}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Passengers:</h5>
                        </div>
                        <div className='col-2'>
                            <p>{passNames.length}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Mode of Payment:</h5>
                        </div>
                        <div className='col-4'>
                            <p>{mode==='Credit Card' ? 'Credit Card' : 'GCash'}</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onPaySubmit} type="button" className="btn m-0">Pay P{price}.00</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPayment