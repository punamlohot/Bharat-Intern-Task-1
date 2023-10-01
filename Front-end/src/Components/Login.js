
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   useEffect(()=>{
  //     const auth = localStorage.getItem('user');
  //     if(auth){
  //         navigate('/WriteBlog');
  //     }
  // },[]
  // )

  const handleLogin = async () => {
    let result = await fetch('http://localhost:5000/api/v1/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-type': 'application/json'
      }
    }
    );
    result = await result.json();
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token',JSON.stringify(result.auth));
      navigate('/WriteBlog');
    }
    else {
      alert("Please enter correct details");
    }
  }
  return (
    <>
      <div className="container-fixed-sm login">
        <h1 className='text-success'>Login</h1>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="p-3">Email:</label>
          <input type="email" className="inputBox" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter email" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="p-3">Password:</label>
          <input type="password" className="inputBox" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Enter password" name="pswd" />
        </div>
        <div className="mb-3">
          <label className="p-2">
            <input className="p-2" type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleLogin}>Submit</button>
        <div className='m-3'>
          <Link to="/Signin">New User Register Here</Link>
        </div>
      </div>
    </>
  )
}

export default Login;