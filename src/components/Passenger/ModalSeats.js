import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import { addSeat,addPrice,addBooking,addPassNames,removePassNames } from '../Redux/busSlice'
import { useNavigate } from 'react-router-dom'
import SeatPhiltranco from './SeatPhiltranco'
import SeatCeres from './SeatCeres'
import SeatJack from './SeatJack'
import SeatVictory from './SeatVictory'

const ModalSeats = ({prices,id,busCompany,origin,startTime,endTime,destination,date,totalSeats,stop}) => {
    const [passName,setPassName] = useState("")
    const [gender,setGender] = useState("")
    const seatInfo = useSelector((state)=>state.booking.seat)
    const seatprice = useSelector((state)=>state.booking.price)
    const passNames = useSelector((state)=>state.booking.passengerNames)
    const totalprice = seatprice.reduce((a, b) => a + b, 0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onAvailSeat=(e)=>{
        dispatch(addSeat({
            name: e.target.name,
            price: e.target.value
        }))
        dispatch(addPrice(Number(e.target.value)))
    }
    const onBooking=(e)=>{
        e.preventDefault()
        dispatch(addBooking({
            prices,
            busCompany,
            origin,
            startTime,
            endTime,
            destination,
            date,
            totalprice,
            passNames,
            totalSeats,
            stop,
        }))
        navigate('/passenger/payment')
        window.location.reload()
    }
    const closeBooking=(e)=>{
        e.preventDefault()
        dispatch(removePassNames())
    }
    return (
        <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Choose your Seats</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-6 seatMap'>
                            <div className='row'>
                                {busCompany==='Philtranco' &&
                                    <div className='d-flex philtranco'>
                                        <div className='flex-fill' style={{marginRight: "1vw"}}>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <h5 className='m-0'>D</h5>
                                                    <h5 className='m-0'>R</h5>
                                                    <h5 className='m-0'>I</h5>
                                                    <h5 className='m-0'>V</h5>
                                                    <h5 className='m-0'>E</h5>
                                                    <h5 className='m-0'>R</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-fill'>
                                            <div className='row'>
                                                <SeatPhiltranco
                                                    type1='1'
                                                    type2='2'
                                                    type3='3'
                                                    type4='4'
                                                    type5='5'
                                                    type6='6'
                                                    type7='7'
                                                    type8='8'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatPhiltranco
                                                    type1='9'
                                                    type2='10'
                                                    type3='11'
                                                    type4='12'
                                                    type5='13'
                                                    type6='14'
                                                    type7='15'
                                                    type8='16'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <div style={{height:"3vh"}}></div>
                                                <SeatPhiltranco
                                                    type1='17'
                                                    type2='18'
                                                    type3='19'
                                                    type4='20'
                                                    type5='21'
                                                    type6='22'
                                                    type7='23'
                                                    type8='24'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatPhiltranco
                                                    type1='25'
                                                    type2='26'
                                                    type3='27'
                                                    type4='28'
                                                    type5='29'
                                                    type6='30'
                                                    type7='31'
                                                    type8='32'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                {busCompany==='Ceres Transport' &&
                                    <div className='d-flex philtranco'>
                                        <div className='flex-fill' style={{marginRight: "1vw"}}>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <h5 className='m-0'>D</h5>
                                                    <h5 className='m-0'>R</h5>
                                                    <h5 className='m-0'>I</h5>
                                                    <h5 className='m-0'>V</h5>
                                                    <h5 className='m-0'>E</h5>
                                                    <h5 className='m-0'>R</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-fill'>
                                            <div className='row'>
                                                <SeatCeres
                                                    type1='1'
                                                    type2='2'
                                                    type3='3'
                                                    type4='4'
                                                    type5='5'
                                                    type6='6'
                                                    type7='7'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatCeres
                                                    type1='8'
                                                    type2='9'
                                                    type3='10'
                                                    type4='11'
                                                    type5='12'
                                                    type6='13'
                                                    type7='14'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <div style={{height:"3vh"}}></div>
                                                <SeatCeres
                                                    type1='15'
                                                    type2='16'
                                                    type3='17'
                                                    type4='18'
                                                    type5='19'
                                                    type6='20'
                                                    type7='21'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatCeres
                                                    type1='22'
                                                    type2='23'
                                                    type3='24'
                                                    type4='25'
                                                    type5='26'
                                                    type6='27'
                                                    type7='28'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                {busCompany==='Jac Liner' &&
                                    <div className='d-flex philtranco'>
                                        <div className='flex-fill' style={{marginRight: "1vw"}}>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <h5 className='m-0'>D</h5>
                                                    <h5 className='m-0'>R</h5>
                                                    <h5 className='m-0'>I</h5>
                                                    <h5 className='m-0'>V</h5>
                                                    <h5 className='m-0'>E</h5>
                                                    <h5 className='m-0'>R</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-fill'>
                                            <div className='row'>
                                                <SeatJack
                                                    type1='1'
                                                    type2='2'
                                                    type3='3'
                                                    type4='4'
                                                    type5='5'
                                                    type6='6'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatJack
                                                    type1='7'
                                                    type2='8'
                                                    type3='9'
                                                    type4='10'
                                                    type5='11'
                                                    type6='12'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <div style={{height:"3vh"}}></div>
                                                <SeatJack
                                                    type1='13'
                                                    type2='14'
                                                    type3='15'
                                                    type4='16'
                                                    type5='17'
                                                    type6='18'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatJack
                                                    type1='19'
                                                    type2='20'
                                                    type3='21'
                                                    type4='22'
                                                    type5='23'
                                                    type6='24'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                {busCompany==='Victory Liner' &&
                                    <div className='d-flex philtranco'>
                                        <div className='flex-fill' style={{marginRight: "1vw"}}>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <h5 className='m-0'>D</h5>
                                                    <h5 className='m-0'>R</h5>
                                                    <h5 className='m-0'>I</h5>
                                                    <h5 className='m-0'>V</h5>
                                                    <h5 className='m-0'>E</h5>
                                                    <h5 className='m-0'>R</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-fill'>
                                            <div className='row'>
                                                <SeatVictory
                                                    type1='1'
                                                    type2='2'
                                                    type3='3'
                                                    type4='4'
                                                    type5='5'
                                                    type6='6'
                                                    type7='7'
                                                    type8='8'
                                                    type9='9'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatVictory
                                                    type1='10'
                                                    type2='11'
                                                    type3='12'
                                                    type4='13'
                                                    type5='14'
                                                    type6='15'
                                                    type7='16'
                                                    type8='17'
                                                    type9='18'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <div style={{height:"3vh"}}></div>
                                                <SeatVictory
                                                    type1='19'
                                                    type2='20'
                                                    type3='21'
                                                    type4='22'
                                                    type5='23'
                                                    type6='24'
                                                    type7='25'
                                                    type8='26'
                                                    type9='27'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                                <SeatVictory
                                                    type1='28'
                                                    type2='29'
                                                    type3='30'
                                                    type4='31'
                                                    type5='32'
                                                    type6='33'
                                                    type7='34'
                                                    type8='35'
                                                    type9='36'
                                                    value={prices}
                                                    onChange={onAvailSeat}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='col-6 seatForm'>
                            <div className='row'>
                                <div className='col-2 titleMenu'>
                                    <h6>Details</h6>
                                </div>
                                <div className='col-10 passForm'>
                                    {seatInfo.map((item,index)=>(
                                        <>
                                            {!passNames[index]?
                                            <div className='row' key={index}>
                                                <div className='col-12 mb-2'>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="username" onChange={(e)=>setPassName(e.target.value)}/>
                                                        <label for="floatingInput">Name</label>
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <div className='row'>
                                                        <div className="form-check col-6">
                                                            <input className="form-check-input" type="radio" name={`flexRadioDefault${index}`} value='Male' id="flexRadioDefault1" onChange={(e)=>setGender(e.target.value)}/>
                                                            <label className="form-check-label" for="flexRadioDefault1">
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="form-check col-6 mb-2">
                                                            <input className="form-check-input" type="radio" name={`flexRadioDefault${index}`} value='Female' id="flexRadioDefault2" onChange={(e)=>setGender(e.target.value)}/>
                                                            <label className="form-check-label" for="flexRadioDefault2">
                                                                Female
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 cfrmbtn'>
                                                    <button className='buttonConfirm' onClick={(e)=>{
                                                        e.preventDefault()
                                                        dispatch(addPassNames({
                                                            passName,gender,seat: item.name, prices
                                                        }))
                                                    }}>Confirm</button>
                                                </div>
                                                <div className='col-6 seatPrice mt-3'>
                                                    <h6>Seat Assigned: <span>{item.name}</span></h6>
                                                </div>
                                                <div className='col-6 seatPrice mb-2 mt-3'>
                                                    <h6>Price: <span>P{item.price}.00</span></h6>
                                                </div>
                                            </div>:
                                            <div className='row'>
                                                <div className='col-12 seatPrice'>
                                                    <h6>Passenger Name: <span>{passNames[index].passName}</span></h6>
                                                </div>
                                                <div className='col-12 seatPrice'>
                                                    <h6>Gender: <span>{passNames[index].gender}</span></h6>
                                                </div>
                                                <div className='col-6 seatPrice'>
                                                    <h6>Seat Assigned: <span>{item.name}</span></h6>
                                                </div>
                                                <div className='col-6 seatPrice mb-2'>
                                                    <h6>Price: <span>P{item.price}.00</span></h6>
                                                </div>
                                            </div>
                                            
                                            }
                                        </>
                                        
                                    ))}
                                    <hr/>
                                </div>
                                <div className='col-8 titleMenu'>
                                    <h5>Total:</h5>
                                </div>
                                <div className='col-4'>
                                    <h5>P{totalprice}.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={onBooking} className="btn ">Proceed to payment</button>
                    <button type="button" onClick={closeBooking} className="btn m-0" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSeats