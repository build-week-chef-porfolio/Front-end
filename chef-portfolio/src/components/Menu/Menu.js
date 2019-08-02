import React, { Component } from 'react'
import { Link } from "react-router-dom";


const MainMenu = () => {

    return (
      <ul className='menuWrapper'>
        <li>
        <Link exact to="/">Home</Link>
        </li>
        <li>
          <Link exact to="/recipes">Recipes</Link>
        </li>
        <li>
          Images
        </li>
        <li>
          Portfolio
        </li>
        <li>
          Clients
        </li>
        <li>
          Support
        </li>
        <li>
          Sign Up
        </li>
      </ul>
    )
}

export default MainMenu