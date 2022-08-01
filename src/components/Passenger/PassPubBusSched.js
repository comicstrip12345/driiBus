import React,{useState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux/es/exports'
import Swal from 'sweetalert2'
import ModalSeats from './ModalSeats'

const PassPubBusSched = () => {
    const schedules = useSelector((state)=>state.booking.scheduleStorage)
    const [origin,setOrigin] = useState("")
    const [destination,setDestination] = useState("")
    const [date,setDate] = useState("")
    const [results,setResults] = useState([])
    console.log({origin,destination,date});
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
                                                        <p>{item.origin} <span>({item.startTime})</span><i className="bi bi-arrow-right-square"></i>{item.destination} <span>({item.endTime})</span></p>
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
                                                    <div className='col-4 bookNow'>
                                                        <button type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                                                            See Available Seats
                                                        </button>
                                                    </div>
                                                    <ModalSeats 
                                                        id={`exampleModal${index}`} 
                                                        prices={item.price}
                                                        busCompany={item.busCompany}
                                                        origin={item.origin}
                                                        startTime={item.startTime}
                                                        endTime={item.endTime}
                                                        destination={item.destination}
                                                        date={item.date}
                                                        totalSeats={item.totalSeats}
                                                        stop={item.stop}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        </>:
                                        <>
                                        {schedules.map((item,index)=>(
                                            <div className='col-12 bookCard' key={index}>
                                                <div className='row'>
                                                    <div className='col-3 company'>
                                                        <h5>{item.busCompany}</h5>
                                                    </div>
                                                    <div className='col-6 route'>
                                                        <p>{item.origin} <span>({item.startTime})</span><i className="bi bi-arrow-right-square"></i>{item.destination} <span>({item.endTime})</span></p>
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
                                                    <div className='col-4 bookNow'>
                                                        <button type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                                                            See Available Seats
                                                        </button>
                                                    </div>
                                                    <ModalSeats 
                                                        id={`exampleModal${index}`} 
                                                        prices={item.price}
                                                        busCompany={item.busCompany}
                                                        origin={item.origin}
                                                        startTime={item.startTime}
                                                        endTime={item.endTime}
                                                        destination={item.destination}
                                                        date={item.date}
                                                        totalSeats={item.totalSeats}
                                                        stop={item.stop}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        </>
                                        }
                                        
                                    </>:
                                    <p>No Schedule yet.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default PassPubBusSched