import React,{useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addSchedule } from '../Redux/busSlice'
import Swal from 'sweetalert2'

const Modal = () => {
    const [origin,setOrigin] = useState("")
    const [destination,setDestination] = useState("")
    const [stop,setStop] = useState("")
    const [date,setDate] = useState("")
    const [startTime,setstartTime] = useState("")
    const [endTime,setendTime] = useState("")
    const [busCompany,setbusCompany] = useState("")
    const [totalSeats,settotalSeats] = useState(0)
    const [seatAvail,setseatAvail] = useState(0)
    const [price,setprice] = useState(0)
    const [availSeat,setAvailSeat] = useState(0)
    const [disable,setDisable] = useState(false)
    
    const dispatch = useDispatch()
    const submitSchedule=(e)=>{
        e.preventDefault()
        dispatch(addSchedule({
            origin,destination,stop,date,startTime,endTime,busCompany,totalSeats,seatAvail,price
        }))
        Swal.fire({
            icon:'success',
            title:'Schedule added.'
        })
    }
    const decreaseSeat=(e)=>{
        e.preventDefault()
        setAvailSeat(Number(e.target.value))
        setDisable(true)
    }
    const decrease2Seat=(e)=>{
        e.preventDefault()
        setAvailSeat(Number(e.target.value)- 1)
        // setDisable(true)
    }
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Schedule a <span>bus</span></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className='row'>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Origin</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setOrigin(e.target.value)}>
                                        <option selected>Choose...</option>
                                        <option>Paliparan</option>
                                        <option>Baclaran</option>
                                        <option>Imus</option>
                                        <option>Alabang</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Destination</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setDestination(e.target.value)}>
                                        <option selected>Choose...</option>
                                        {origin  && 
                                        <>
                                            {origin !== "Paliparan" && <option>Paliparan</option>}
                                            {origin !== "Baclaran" && <option>Baclaran</option>}
                                            {origin !== "Imus" && <option>Imus</option>}
                                            {origin !== "Alabang" && <option>Alabang</option>}
                                        </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Date</label>
                                    <input type='date' className="form-control" onChange={(e)=> setDate(new Date(`${e.target.value}`).toDateString())}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Rest Stop</label>
                                    <input type='text' className="form-control" onChange={(e)=> setStop(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Start Time</label>
                                    <input type='time' className="form-control" onChange={(e)=> setstartTime(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">End Time</label>
                                    <input type='time' className="form-control" onChange={(e)=> setendTime(e.target.value)}/><br/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Bus Company</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setbusCompany(e.target.value)}>
                                        <option selected>Choose...</option>
                                        <option>Philtranco</option>
                                        <option>Victory Liner</option>
                                        <option>Jac Liner</option>
                                        <option>Ceres Transport</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Total Seats</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e)=> settotalSeats(Number(e.target.value))}>
                                        <option selected>Choose...</option>
                                        {busCompany  && 
                                        <>
                                            {busCompany === "Victory Liner" && <option>36</option>}
                                            {busCompany === "Philtranco" && <option>32</option>}
                                            {busCompany === "Jac Liner" && <option>24</option>}
                                            {busCompany === "Ceres Transport" && <option>28</option>}
                                        </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Available Seats</label>
                                    <input className="form-control" type='number' onChange={(e)=> setseatAvail(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Price</label>
                                    <input type='number' className="form-control" onChange={(e)=> setprice(e.target.value)}/><br/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn" data-bs-dismiss="modal" onClick={submitSchedule}>Submit Schedule</button>
                    <button type="button" className="btn btn-secondary m-0" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal