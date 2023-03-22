import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user-info'))
  // console.log("from hearder component",user.name);


  function logout(){
    localStorage.clear(); 
    navigate('/register')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <h1 className="navbar-brand" href="#">E-COM</h1>
              <ul className="navbar-nav">
                {
                  localStorage.getItem('user-info') ? 
                  <>
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link">Product List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/add" className="nav-link">Add Product</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/update" className="nav-link">Update Product</NavLink>
                    </li>  
                    <li className="nav-item">
                      <NavLink to="/search" className="nav-link">Search Product</NavLink>
                    </li>  
                  </>
                  :
                  <>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                  </>
                }

                {/* drop down menu */}
                {
                  localStorage.getItem('user-info') ?
                  <>
                    <li className="nav-item dropdown me-auto">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user && user.name}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
                        <li><a className="dropdown-item">Profile</a></li>
                      </ul>
                    </li>
                  </>  : null
                }
                  
              </ul>
            </div>
          </div>

      </nav>
    </div>
  );
}

export default Header