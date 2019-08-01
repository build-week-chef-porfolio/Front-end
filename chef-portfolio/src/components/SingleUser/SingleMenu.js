import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SingleMenu = () => {
    return (
        <ul className='singlemenuWrapper'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/chefs'>Find Chefs</Link>
        </li>
        <li>
          <Link to='/recipes'>Browse Recipes</Link>
        </li>
        <li>
          About Us
        </li>
      </ul>
    )
}

export default SingleMenu