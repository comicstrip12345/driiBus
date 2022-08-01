import React from 'react'

const SeatCeres = ({value,onChange,type1,type2,type3,type4,type5,type6,type7}) => {
    return (
        <div className='col-12 seats'>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type1} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type2} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type3} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type4} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type5} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type6} onChange={onChange}/>
            </div>
            <div className='seat'>
                <input type="radio" value={value} id="radioNoLabel1" name={type7} onChange={onChange}/>
            </div>
        </div>
    )
}

export default SeatCeres