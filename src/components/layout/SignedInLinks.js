import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Blood Search</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lightn-1">csc</NavLink></li>
        </ul>
    )
}

export default SignedInLinks