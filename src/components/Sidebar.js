import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({pathOpt1,pathOpt2,pathOpt3,opt1,opt2,opt3}) => {
    return (
        <div className="flex-fill sidebar" style={{marginTop:"5vh"}}>
            <ul className='navbar-nav'>
                <li className='nav-item options'>
                    <Link className='nav-link options' to={`${pathOpt1}`}>{opt1}</Link>
                </li>
                <li className='nav-item options'>
                    <Link className='nav-link options' to={`${pathOpt2}`}>
                        {opt2}
                    </Link>
                </li>
                <li className='nav-item options'>
                    <Link className='nav-link options' to={`${pathOpt3}`}>
                        {opt3}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar