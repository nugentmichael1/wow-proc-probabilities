import React from 'react'
import { NavLink } from 'react-router-dom';
// import '../CSS/Nav.css'


function NavBar() {

    return (<>
        <nav>
            <ul>
                <li>
                    <NavLink to='Calculator'>Calculator</NavLink>
                </li>
                <li>
                    <NavLink to='Explanation'>Explanation</NavLink>
                </li>
            </ul>
        </nav>
    </>

    )
}

export default NavBar