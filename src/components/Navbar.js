import React from 'react'
import {Link} from 'react-router-dom' 
import { useSelector } from 'react-redux/es/exports'
import Offcanvas from './Offcanvas'
import OffcanvasAdminAccount from './Admin/OffcanvasAdminAccount'

const Navbar = () => {
    const user = useSelector((state)=>state.booking.login)
    return (
        <header>
            <nav className='navbar navbar-expand'>
                <div className='container'>
                    <Link className='navbar-brand logo' to='/'>drii<span>Bus</span></Link>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            {!user ?
                                <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                Accounts
                                </a>
                                :
                                <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasAccount" role="button" aria-controls="offcanvasExample">
                                {user.username}
                                </a>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            {!user?
                <Offcanvas/> :
                <OffcanvasAdminAccount id="offcanvasAccount"/>
            }
        </header>
    )
}

export default Navbar