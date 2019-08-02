import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const SingleMainMenu = () => {

    return (
      <ul className='singlemenuWrapper'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/chefs">Find Chefs</Link>
        </li>
        <li>
        <Link to="/recipes">Browse Recipes</Link>
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

export default SingleMainMenu