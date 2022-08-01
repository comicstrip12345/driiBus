import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Redux/busSlice'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const OffcanvasAdminAccount = ({id}) => {
    const user = useSelector((state)=>state.booking.login)
    console.log(user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutAccount=(e)=>{
        e.preventDefault()
        Swal.fire({
            icon:'success',
            title:'You have logged out. Come back anytime',
            allowOutsideClick: false,
            showConfirmButton:true
        }).then((result)=>{
            if(result.isConfirmed){
                dispatch(logout())
                navigate('/')
                window.location.reload()
            }
        })
    }
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id={id} aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">{user.account==='Passenger'?'Passenger':'Admin'}: <span className='username'>{user.username}</span><p className='email'>{user.email}</p></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <button className='account' onClick={logoutAccount}>Log Out</button>
            </div>
        </div>
    )
}

export default OffcanvasAdminAccount