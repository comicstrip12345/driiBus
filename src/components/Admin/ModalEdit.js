import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { editSchedule} from '../Redux/busSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalEdit = ({id,origin,destination,date,schedId,stop,startTime,endTime,busCompany,totalSeats,price}) => {
    const [editOrigin,setEditOrigin]=useState("")
    const [editDestination,setEditDestination]=useState("")
    const [editDate,setEditDate]=useState("")
    const [editStop,setEditStop]=useState("")
    const [editStartTime,setEditStartTime]=useState("")
    const [editEndTime,setEditEndTime]=useState("")
    const [editBusCompany,setEditBusCompany]=useState("")
    const [editTotalSeats,setEditTotalSeats]=useState("")
    const [editPrice,setEditPrice]=useState("")
    const [updateBus,setUpdateBus]=useState(busCompany)

    const dispatch = useDispatch()
    const updateOrigin = editOrigin ? editOrigin : origin
    const updateDestination = editDestination ? editDestination : destination
    const updateDate = editDate ? editDate : date
    const updateStop = editStop ? editStop : stop
    const updateStartTime = editStartTime ? editStartTime : startTime
    const updateEndTime = editEndTime ? editEndTime : endTime
    const updateBusCompany = editBusCompany ? editBusCompany : busCompany
    const updateTotalSeats = editTotalSeats ? editTotalSeats : totalSeats
    const updatePrice = editPrice ? editPrice : price
    
    const onEditSched = (e) =>{
        e.preventDefault()
        dispatch(editSchedule({
            id:schedId, 
            origin:updateOrigin, 
            destination:updateDestination, 
            date:updateDate,
            stop:updateStop,
            startTime: updateStartTime,
            endTime: updateEndTime,
            busCompany: updateBusCompany,
            totalSeats: updateTotalSeats,
            seatAvail: updateTotalSeats,
            price: updatePrice
        }))
        toast.success('Schedule Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    }
    
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Bus <span>Schedule</span></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className='row'>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Origin</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setEditOrigin(e.target.value)}>
                                        {!editOrigin ?
                                            <>
                                                {origin && 
                                                    <>
                                                        {origin === 'Paliparan' ? <option selected>Paliparan</option>: <option>Paliparan</option>}
                                                        {origin === 'Baclaran' ? <option selected>Baclaran</option>: <option>Baclaran</option>}
                                                        {origin === 'Imus' ? <option selected>Imus</option>: <option>Imus</option>}
                                                        {origin === 'Alabang' ? <option selected>Alabang</option>: <option>Alabang</option>}
                                                    </>
                                                }
                                            </> :
                                            <>
                                                {editOrigin &&
                                                    <>
                                                        <option>Paliparan</option>
                                                        <option>Baclaran</option>
                                                        <option>Imus</option>
                                                        <option>Alabang</option>
                                                    </>
                                                }
                                            </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Destination</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setEditDestination(e.target.value)}>
                                        {!editOrigin ?
                                            <>
                                                {origin && 
                                                    <>
                                                        {origin !== 'Paliparan' &&
                                                            <>
                                                                {destination === 'Paliparan' ? <option selected>Paliparan</option>: <option>Paliparan</option>}
                                                            </>
                                                            }
                                                            {origin !== 'Baclaran' &&
                                                            <>
                                                                {destination === 'Baclaran' ? <option selected>Baclaran</option>: <option>Baclaran</option>}
                                                            </>
                                                            }
                                                            {origin !== 'Imus' &&
                                                            <>
                                                                {destination === 'Imus' ? <option selected>Imus</option>: <option>Imus</option>}
                                                            </>
                                                            }
                                                            {origin !== 'Alabang' &&
                                                            <>
                                                                {destination === 'Alabang' ? <option selected>Alabang</option>: <option>Alabang</option>}
                                                            </>
                                                        }
                                                    </>
                                                }
                                            </> :
                                            <>
                                                {editOrigin &&
                                                    <>
                                                        {editOrigin !== 'Paliparan' && <option>Paliparan</option>}
                                                        {editOrigin !== "Baclaran" && <option>Baclaran</option>}
                                                        {editOrigin !== "Imus" && <option>Imus</option>}
                                                        {editOrigin !== "Alabang" && <option>Alabang</option>}
                                                    </>
                                                }
                                            </>
                                        }
                                        
                                        
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Date</label>
                                    <input type='date' className="form-control" value='12/22/1995' onChange={(e)=> setEditDate(new Date(`${e.target.value}`).toDateString())}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Rest Stop</label>
                                    <input type='text' className="form-control" placeholder={stop} onChange={(e)=> setEditStop(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Start Time</label>
                                    <input type='time' className="form-control" onChange={(e)=> setEditStartTime(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">End Time</label>
                                    <input type='time' className="form-control" onChange={(e)=> setEditEndTime(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Bus Company</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>{
                                        setUpdateBus(false)
                                        setEditBusCompany(e.target.value)
                                        }}>
                                        {updateBus &&
                                            <>
                                                {updateBus === 'Philtranco' && 
                                                    <>
                                                        <option selected>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Jac Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                    }
                                                {updateBus === 'Victory Liner' && 
                                                    <>
                                                        <option selected>Victory Liner</option>
                                                        <option>Philtranco</option>
                                                        <option>Jac Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                }
                                                {updateBus === 'Jac Liner' && 
                                                    <>
                                                        <option selected>Jac Liner</option>
                                                        <option>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                }
                                                {updateBus === 'Ceres Transport' && 
                                                    <>
                                                        <option selected>Ceres Transport</option>
                                                        <option>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Jac Liner</option>
                                                    </>
                                                }
                                            </>
                                        }
                                        {editBusCompany &&
                                            <>
                                                {editBusCompany === 'Philtranco' && 
                                                    <>
                                                        <option selected>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Jac Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                }
                                                {editBusCompany === 'Victory Liner' && 
                                                    <>
                                                        <option selected>Victory Liner</option>
                                                        <option>Philtranco</option>
                                                        <option>Jac Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                }
                                                {editBusCompany === 'Jac Liner' && 
                                                    <>
                                                        <option selected>Jac Liner</option>
                                                        <option>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Ceres Transport</option>
                                                    </>
                                                }
                                                {editBusCompany === 'Ceres Transport' && 
                                                    <>
                                                        <option selected>Ceres Transport</option>
                                                        <option>Philtranco</option>
                                                        <option>Victory Liner</option>
                                                        <option>Jac Liner</option>
                                                    </>
                                                }
                                            </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Total Seats</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=> setEditTotalSeats(Number(e.target.value))}>
                                        {updateBus && 
                                            <>
                                                {updateBus === "Victory Liner" && <option>36</option>}
                                                {updateBus === "Philtranco" && <option>32</option>}
                                                {updateBus === "Jac Liner" && <option>24</option>}
                                                {updateBus === "Ceres Transport" && <option>28</option>}
                                            </>
                                        }
                                        {editBusCompany  && 
                                            <>
                                                <option selected>Choose...</option>
                                                {editBusCompany === "Victory Liner" && <option>36</option>}
                                                {editBusCompany === "Philtranco" && <option>32</option>}
                                                {editBusCompany === "Jac Liner" && <option>24</option>}
                                                {editBusCompany === "Ceres Transport" && <option>28</option>}
                                            </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Price</label>
                                    <input type='number' className="form-control" placeholder={price} onChange={(e)=> setEditPrice(e.target.value)}/><br/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn" data-bs-dismiss="modal" onClick={onEditSched}>Edit Schedule</button>
                    <button type="button" className="btn btn-secondary m-0" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit