import React from 'react';
import MainMenu from '../Menu/Menu';
import { Image } from 'semantic-ui-react'; 

const Header = () => {

    return (
        <div className="headerWrapper">
            <div className="headerImage">
                <MainMenu />
                <div className='headerH1'>
                    <h1>Chef Portfolio is the place for Professional Chefs</h1>
                </div>
            </div>
        </div>
    )
}

export default Header