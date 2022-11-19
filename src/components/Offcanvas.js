import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUsers, addLogin } from './Redux/busSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Offcanvas = () => {
    const [form, setForm]= useState("Sign In")
    const [name, setname]= useState("")
    const [username, setusername]= useState("")
    const [email, setemail]= useState("")
    const [account, setaccount]= useState("")
    const [password, setpassword]= useState("")
    const [conpassword, setconpassword]= useState("")
    const [usernameValid, setusernameValid]= useState(true)
    const [passwordValid, setpasswordValid]= useState(true)
    const [passwordValid2, setpasswordValid2]= useState(true)
    const [closeCanvas,setCloseCanvas] = useState("")
    const [loginPassword,setLoginPassword] = useState('')

    const navigate = useNavigate()

    const users = useSelector((state)=>state.booking.userStorage)
    const dispatch = useDispatch()
    const signUp =(e)=>{
        e.preventDefault()
        setForm("Sign Up")
    }
    const signIn =(e)=>{
        e.preventDefault()
        setForm("Sign In")
    }
    const onSubmitSignUp=(e)=>{
        e.preventDefault()
        if(password === conpassword){
            dispatch(addUsers({
                name,username,account,email,password
            }))
            setpasswordValid(true)
            Swal.fire({
                icon:'success',
                title:'Congratulations. You have signed up. Proceed to log in.'
            })
        }
        else{
            console.log("error");
            setpasswordValid(false)
        }
    } 
    const onSubmitSignIn=(e)=>{
        e.preventDefault()
        const searchFind = users.find((user)=>username === user.username)
        
        if(!searchFind){
            setusernameValid(false)
        }
        else if(searchFind.username === username && searchFind.password === password){
            setusernameValid(true)
            setpasswordValid(true)
            setCloseCanvas("offcanvas")
            dispatch(addLogin({
                name:searchFind.name,username,password,account:searchFind.account,email:searchFind.email
            }))
            Swal.fire({
                icon:'success',
                title:`Congratulations. You have logged in as ${searchFind.account}.`,
                allowOutsideClick: false,
                showConfirmButton:true
            }).then((result)=>{
                if(result.isConfirmed){
                    if(searchFind.account === "Admin"){
                        navigate('/admin')
                        window.location.reload()
                    }
                    else if(searchFind.account === "Passenger"){
                        navigate('/passenger')
                        window.location.reload()
                    }
                }
            })
        }
        
        else{
            console.log("error");
            // setusernameValid(false)
            setpasswordValid(false)
        }
    }
    // const showLoginPW=(e)=>{
        
    // }
    return (
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            {form === "Sign Up"?
                <>
                    <div className="offcanvas-header pt-3 pb-1">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sign <span>Up</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body pt-2 pb-2">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
                                <label for="floatingInput">Username</label>
                            </div>
                            <select className="form-select mb-3" aria-label="Default select example" onChange={(e)=>setaccount(e.target.value)}>
                                <option>Select an account</option>
                                <option>Passenger</option>
                                <option>Admin</option>
                            </select>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setemail(e.target.value)}/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setconpassword(e.target.value)}/>
                                <label for="floatingPassword">Confirm Password</label>
                                {!passwordValid && <p>Password doesn't match</p>}
                            </div>
                            <button className='focus' onClick={onSubmitSignUp}>Sign Up</button>
                            <button className='notFocus m-0' onClick={signIn}>Have an account? Sign In Now.</button>
                        </form>
                    </div>
                </> :
                <>
                    <div className="offcanvas-header pt-3 pb-1">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sign <span>In</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body pt-2 pb-2">
                        {users && 
                            <>
                                {users.map((item,index)=>(
                                    <div className='row loginCard' key={index}>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            if(!loginPassword){
                                                setLoginPassword(`user${index}`)
                                            }
                                            else{
                                                setLoginPassword(false)
                                            }
                                        }}>
                                            <div className='row'>
                                                <div className='col-2 logo d-flex align-items-center'>
                                                    <i class="bi bi-person-circle"></i>
                                                </div>
                                                <div className='col-10 user'>
                                                    <h4 className='m-0'>{item.username}</h4>
                                                    <p className='m-0'>{item.account}</p>
                                                </div>
                                            </div>
                                        </button>
                                        {loginPassword === `user${index}` && 
                                            <div className='col-12 form'>
                                                <form onSubmit={(e)=>{
                                                    e.preventDefault()
                                                    if(password === item.password){
                                                        dispatch(addLogin({
                                                            name:item.name,
                                                            username:item.username,
                                                            password:item.password,
                                                            account:item.account,
                                                            email:item.email
                                                        }))
                                                        Swal.fire({
                                                            icon:'success',
                                                            title:`Congratulations. You have logged in as ${item.account}.`,
                                                            allowOutsideClick: false,
                                                            showConfirmButton:true
                                                        }).then((result)=>{
                                                            if(result.isConfirmed){
                                                                if(item.account === "Admin"){
                                                                    navigate('/admin')
                                                                    window.location.reload()
                                                                }
                                                                else if(item.account === "Passenger"){
                                                                    navigate('/passenger')
                                                                    window.location.reload()
                                                                }
                                                            }
                                                        })
                                                    }
                                                    else{
                                                        setpasswordValid2(false)
                                                    }
                                                }}>
                                                    <div className="form-floating mb-2">
                                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                                                        <label for="floatingPassword">Password</label>
                                                        {!passwordValid2 && <p>Password is incorrect.</p>}
                                                    </div>
                                                </form>
                                            </div>
                                        }
                                    </div>
                                ))}
                            </>
                        }
                        <h5 className='or'>OR</h5>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
                                <label for="floatingInput">Username</label>
                                {!usernameValid && <p>Username doesn't exist.</p>}
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                                <label for="floatingPassword" >Password</label>
                                {!passwordValid && <p>Password is incorrect.</p>}
                            </div>
                            <button className='focus' data-bs-dismiss={`${closeCanvas}`}  onClick={onSubmitSignIn}>Sign In</button>
                            <button className='notFocus' onClick={signUp}>New? Sign Up First.</button>
                        </form>
                    </div>
                </>
            }
        </div>  
    )
}

export default Offcanvas