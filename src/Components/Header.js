import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from './Navbar'


import '../CSS/Header.css'

function Header() {
    return (
        <div id='header'>
            <h1>WoW Proc Probability</h1>
            <NavBar />
        </div>
    )
}

export default Header