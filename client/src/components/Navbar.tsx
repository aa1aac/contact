import React from 'react'

export const Navbar = () : JSX.Element => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#!">Contact <i className="fa fa-address-book-o"></i> </a>
  
  
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" style={{color: '#ff7b7b'}} href="#!">Logout  <i className="fa fa-user-times"></i> </a>
      </li>
    </ul>
 
</nav>
    )
}