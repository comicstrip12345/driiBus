import React from 'react'
import Sidebar from '../Sidebar'
import Modal from './Modal'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { postPublic,deleteSchedule } from '../Redux/busSlice'
import Swal from 'sweetalert2'
import ModalEdit from './ModalEdit'
import { ToastContainer, toast } from 'react-toastify';

const AdminBusSchedule = () => {
    const schedules = useSelector((schedule)=>schedule.booking.busSched)
    const dispatch = useDispatch()
    const publicSubmit=(e)=>{
        e.preventDefault()
        dispatch(postPublic(schedules))
        Swal.fire({
            icon:'success',
            title:'Schedules are set to public.',
            allowOutsideClick: false,
                showConfirmButton:true
            }).then((result)=>{
                if(result.isConfirmed){
                    window.location.reload()
                }
        })
    }
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
                                    <h1>Bus Schedule</h1>
                                </div>
                                <div className='col-6 button'>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Schedule</button>
                                    <button class="btn btn-primary" onClick={publicSubmit}>Post to public</button>
                                </div>
                                <div className='schedules'>
                                {schedules.length === 0 ?
                                    <div className='col-12 nosched'>
                                        <img src={require('../../photos/no-schedule.png')} alt='nosched'/>
                                        <p>No Schedule yet</p>
                                    </div>
                                    :
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
                                                <div className='col-1 price'>
                                                    <p>P{item.price}.00</p>
                                                </div>
                                                <div className='col-2 modify'>
                                                    <button onClick={() => {
                                                        dispatch(deleteSchedule(item.id))
                                                        toast.success('Schedule Removed', {
                                                            position: "top-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: false,
                                                            progress: undefined,
                                                            theme: 'colored'
                                                        });
                                                    }}>
                                                        <i class="bi bi-x-square-fill red"></i>
                                                    </button>
                                                    <button type='button' data-bs-toggle="modal" data-bs-target={`#editSched${index}`}><i class="bi bi-pencil-fill green"></i></button>
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
                                            <ModalEdit 
                                                id={`editSched${index}`} 
                                                origin={item.origin}
                                                destination={item.destination}
                                                startTime={item.startTime}
                                                endTime={item.endTime}
                                                date={item.date}
                                                stop={item.stop}
                                                busCompany={item.busCompany}
                                                totalSeats={item.totalSeats}
                                                price={item.price}
                                                schedId={item.id}
                                            />
                                        </div>
                                        ))}
                                    </>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal/>
                <ToastContainer/>
            </section>
        </article>
    )
}

export default AdminBusSchedule