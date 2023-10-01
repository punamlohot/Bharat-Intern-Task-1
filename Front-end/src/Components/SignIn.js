import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [name, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const auth = localStorage.getItem('user');
  //   if (auth)
  //   {
  //     navigate('/Login');
  //   }
  // } , []);

  const collectData = async () => {
    let result = await fetch('http://localhost:5000/api/v1/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'content-type': 'application/json'
      }
    });
    result = await result.json();
    //console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
      navigate('/Login');
  }
  return (
    <>
      <div className='Sign mb-4'>
        <h1 className='mb-4 text-success'>New User Registration</h1>
        <input type="text" className='inputBox mb-4' placeholder='Create Username...' onChange={(e) => setUsername(e.target.value)} value={name} />
        <input type="email" className='inputBox mb-4' placeholder='Enter Email...' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input type="password" className='inputBox mb-4' placeholder='Create Password...' onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <button type="button" className='btn btn-success signupbutton mb-4' onClick={collectData}>Register</button>
        <div className='box'>Already registered &nbsp;<Link to={'/Login'}>Login Here</Link></div>
      </div>

    </>
  )
}

export default SignIn;