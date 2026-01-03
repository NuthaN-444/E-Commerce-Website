import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import './Style/Login.css'


const Login = () => {
  const [invalidMessage,setInvalidMessage] = useState("");
  const [showInvalidMessage,setShowInvalidMessage] = useState(false);
  const invalidMessageDivRef = useRef();
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  
  function submitHandler(e) {
      e.preventDefault();
      
      setEmail("");
      setPassword("")
  }

  useEffect(() => {
    if (!showInvalidMessage) return;

    const timer = setTimeout(() => {
      setShowInvalidMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showInvalidMessage]);

  function submitHandler(e) {
    e.preventDefault();
    if (password != confirmPassword) {
        setInvalidMessage("password is not matching !");
        setShowInvalidMessage(true);
        return;
      }
    if (username.length < 5) {
      setInvalidMessage("Username Must be greater than 5 characters .");
      setShowInvalidMessage(true);

      return;  
    }
      setEmail("");
      setPassword(""); 
      setConfirmPassword("");
      setUsername("");
  }


  return (
    <>
    <form onSubmit={submitHandler} id='login-form'>
      <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <div className='email-div'>  
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='password-div'>   
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='login-btn-div'><button>Login</button></div>
        <div className='dont-have-an-account'>
          <pre>forget password?</pre>
          <pre onClick={() => navigate("/Register")}><span style={{color:"rgba(0, 140, 255, 1)",fontWeight:"bold"}}> create an account</span></pre>
        </div>
      </div>
      </form>
       {showInvalidMessage && <div className="display-invalid-message" ref={invalidMessageDivRef} >{invalidMessage}</div>}
      </>
  )
}

export default Login
