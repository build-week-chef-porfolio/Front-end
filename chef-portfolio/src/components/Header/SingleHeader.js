import React from 'react';
import { Image } from 'semantic-ui-react'; 
import SingleMainMenu from '../Menu/SingleMenu';

const SingleHeader = () => {

    return (
        <div className="singleheaderWrapper">
            <SingleMainMenu />
            <div className='singleheaderH1'>
                <h1>Get Rop Rated Chefs For Your Next Social Gathering</h1>
            </div>
        </div>
    )
}

export default SingleHeader