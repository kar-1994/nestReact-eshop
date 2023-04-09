import React from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container-flex'>
            <nav className="navbar navbar-expand-lg navbar-dark nav-dpink">
                <div className="collapse navbar-collapse col-sm-11" id="navbarMenu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/service">Service</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>

                        
                    </ul>
                </div>
                <div className="collapse navbar-collapse col-sm-1" id="navbarAction">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown float-right">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Devi
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;