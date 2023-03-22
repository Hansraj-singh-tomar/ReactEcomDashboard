import React, {useEffect, useState} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/add")
    }
  }, [])

  async function signUp(){
    let data = {name, password, email};
    // console.log(data);
    let result = await fetch("http://localhost:3002/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" 
      },
      body: JSON.stringify(data)
    });
    result = await result.json();
    console.log("result",result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add")
  }

  return (
    <>
      <Header />
      <div>
        <h1>User Sign Up</h1>
        <input placeholder='Enter Your Name' type="text" value={name} className='col-sm-6' onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder='Enter Your Password' type="text" value={password} className='col-sm-6' onChange={(e) => setPassword(e.target.value)}/>
        <br/><br/>
        <input placeholder='Enter Your Email' type="text" value={email} className='col-sm-6' onChange={(e) => setEmail(e.target.value)}/>
        <br /><br />
        <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
      </div>
    </>
  )
}

export default Register