import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../GlobalContext'

function Login() {
    const { dispatch } = React.useContext(GlobalContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState({ msg: "", show: false })
    const [passwordErrorMessage, setPasswordErrorMessage] = useState({ msg: "", show: false })

    const [emailOk, setEmailOk] = useState(false)
    const [passwordOk, setPasswordOk] = useState(false)

    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePasswrod = /^[0-9\b]+$/;

    function emailHandle() {
        if (!email || reEmail.test(email) === false) {
            setEmailErrorMessage({ msg: "Email is not valid", show: true });
        } else {
            setEmailErrorMessage({ msg: "", show: false }); 
            setEmailOk(true)           
        }
    }

    function passwordHandle() {
        if (!password || rePasswrod.test(password) === false) {
            setPasswordErrorMessage({ msg: "Password not a numebr", show: true });
        } else {
            let sum = 0;
            let value = password
            while (value) {
                sum += value % 10;
                value = Math.floor(value / 10);
            }
            if (sum > 10) {
                setPasswordErrorMessage({ msg: "Sum is greater than 10", show: true });
            } else if (sum < 10) {
                setPasswordErrorMessage({ msg: "Sum is less than 10", show: true });
            } else if (sum === 10) {
                setPasswordErrorMessage({ msg: " ", show: false });  
                setPasswordOk(true)              
            }
        }
    }

    function loginHandle(e) {
        e.preventDefault()
        emailHandle()
        passwordHandle()
    }

    useEffect(()=>{
        if(emailOk && passwordOk){
            navigate('/')
            dispatch({ type: 'signin', payload: { status: true } })  
        }
    },[emailOk, passwordOk, navigate, dispatch])

    return (
        <div className="login-outer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <h2 className="mb-4 text-center">CP360 Login</h2>
                            <form onSubmit={loginHandle} className="signin-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {emailErrorMessage.show && (<div className="form-group">
                                    <div className="errorMessage">{emailErrorMessage.msg}</div>
                                </div>
                                )}
                                {passwordErrorMessage.show && (<div className="form-group">
                                    <div className="errorMessage">{passwordErrorMessage.msg}</div>
                                </div>
                                )}
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login