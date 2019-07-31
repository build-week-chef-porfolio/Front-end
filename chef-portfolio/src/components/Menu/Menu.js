import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const MainMenu = () => {

    return (
      <ul className='menuWrapper'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          Recipes
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