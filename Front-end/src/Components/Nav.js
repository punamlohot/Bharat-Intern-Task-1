import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Navbar= () => {

  const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/');
    }
    const Redirect=()=>{
      navigate('/WriteBlog');
    }
  return (
    <header className="App-header">
    <nav className="navbar navbar-expand-sm" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href=" # " id="nav"><strong>BHARAT-BLOGGERS</strong></a>
          <ul className="navbar-nav">
        
            {(auth)?
            <>
            <li className="nav-item">
              <Link className="nav-link text-dark d-none d-md-block text-white" to="/" id="nav1"><button className='btn btn-success' onClick={logout} id="loginbtn">Logout({JSON.parse(auth).name})</button></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-dark d-none d-md-block text-white" to="/WriteBlog" id="nav1"><button className='btn btn-success' onClick={Redirect} id="loginbtn">Continue-Blogging</button></Link>
              </li>
              </>
              :
              <>
              <li className="nav-item">
              <Link className="nav-link text-dark d-none d-md-block text-white" to="/SignIn" id="nav2"><button className='btn btn-success' id="signinbtn">SignUp</button></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-dark d-none d-md-block text-white" to="/Login" id="nav2"><button className='btn btn-success' id="signinbtn">LogIn</button></Link>
            </li>
            </>
            }
            </ul>
          </div>
      </nav>
      </header>
  )
}

export default Navbar;