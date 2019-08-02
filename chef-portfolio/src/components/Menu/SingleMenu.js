import React, { Component } from 'react'
import { Link } from "react-router-dom";


const SingleMainMenu = () => {

    return (
      <ul className='singlemenuWrapper'>
        <li>
        <Link exact to="/">Home</Link>
        </li>
        <li>
        <Link exact to="/chefs">Find Chefs</Link>
        </li>
        <li>
        <Link exact to="/recipes">Browse Recipes</Link>
        </li>
        <li>
          About Us
        </li>
        <li>
          Sign Up
        </li>
      </ul>
    )
}

export default SingleMainMenu;