import React,{useState} from 'react'
import { useSelector } from 'react-redux/es/exports'
import Swal from 'sweetalert2'

const PublicSchedule = () => {
    const schedules = useSelector((state)=>state.booking.scheduleStorage)
    const [origin,setOrigin] = useState("")
    const [destination,setDestination] = useState("")
    const [date,setDate] = useState("")
    const [results,setResults] = useState([])
    const searchSched =(e)=>{
        e.preventDefault()
        const searchFilt = schedules.filter((item)=>date===item.date && origin===item.origin && destination===item.destination)
        if(searchFilt.length===0){
            Swal.fire({
                icon:'error',
                title:'No schedule found.'
            })
        }
        else{
            setResults(searchFilt)
            Swal.fire({
                icon:'success',
                title:`${searchFilt.length} schedules found`
            })
        }
    }
    const clearSearch=(e)=>{
        e.preventDefault()
        setResults([])
    }
    return (
        <article>
            <section className='publicSchedule'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 title'>
                            <h1>Public Bus Schedule</h1>
                        </div>
                        <div className='col-12 form'>
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
                                </div>
                                <button onClick={searchSched}>Search Schedule</button>
                                <button onClick={clearSearch}>Clear Results</button>
                            </form>
                        </div>
                        {schedules?
                            <>
                                {results.length!==0?
                                    <>
                                    {results.map((item,index)=>(
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
                                                <div className='col-4 seats'>
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
                                                <div className='col-4 button'>
                                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                    Sign In to Book
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </>
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
                                                <div className='col-3 price'>
                                                    <p>P{item.price}.00</p>
                                                </div>
                                                <div className='col-4 seats'>
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
                                                <div className='col-4 button'>
                                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                    Sign In to Book
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </>
                                }
                            </>:
                            <div className='col-12 nosched'>
                                <img src={require('../photos/no-schedule.png')} alt='nosched'/>
                                <p>No Schedule yet</p>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </article>
    )
}

export default PublicSchedule