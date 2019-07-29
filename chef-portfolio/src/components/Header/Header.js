import React from 'react';
import MainMenu from '../Menu/Menu';
import { Image } from 'semantic-ui-react'; 

const Header = () => {

    return (
        <div className="headerWrapper">
            <MainMenu />
            <div className="headerImage">
                <h1>Chef Portfolio is the place for Professional Chefs</h1>
            </div>
        </div>
    )
}

export default Header