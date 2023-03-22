import React, {useEffect, useState} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/add")
    }
  }, [])

  async function login(){
    console.log("data", email, password);
    let item = {email, password}
    let result = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(item)
    });

    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result))
    navigate("/add")
  }

  return (
    <div>
        <Header />
        <h1>Login Page</h1>
        <input type="text" value={email} className='col-sm-6' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
        <br /><br />
        <input type="password" value={password} className='col-sm-6' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <button onClick={login} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default Login