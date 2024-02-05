import React from 'react'
import { auth } from "../Firebase"
import { signOut } from "firebase/auth"
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header id='header-class' className="p-3 fixed-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src="/src/assets/logo.png" alt="logo" style={{ marginRight: '0.5rem' }} width="32" height="32" className="rounded-circle" />
                            <span className='text-light'>ARTSTHOP</span>
                        </a>
                        <ul className="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 link-light">Home</a></li>
                            <li><a href="/products" className="nav-link px-2 link-light">Products</a></li>
                            <li><a href="/orders" className="nav-link px-2 link-light">Orders</a></li>
                            {!localStorage.getItem("user") && <li><a href="/login" className="nav-link px-2 link-light">Login</a></li>}
                            <li>
                            {localStorage.getItem("user") &&
                            <div className="dropdown text-end">
                            <a href="#" class="nav-link px-2 link-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{JSON.parse(localStorage.getItem("user")).email}</a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={() => {
                                    signOut(auth).then(() => {
                                        localStorage.clear()
                                        window.location = '/';
                                    }).catch((error) => {
                                        alert("There waas a problem signing out")
                                        console.log(error)
                                    })
                                }}>Sign out</a></li>
                            </ul>
                        </div>
                        }
                                </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar