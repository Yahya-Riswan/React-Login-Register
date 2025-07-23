import React from 'react'
import "./style.css"
import logo from "../../Assets/Logo.png"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <img src={logo} alt="" className="img" />
            <h1>Hi, Welcome To Beekeeper</h1>
            <h2>Please Login / Register</h2>
            <div className="div">
                <Link to={"/Login"} className='link'>Login</Link>
                <Link to={"/Register" } className='link'>Register</Link>
            </div>
        </div>
    )
}

export default Home