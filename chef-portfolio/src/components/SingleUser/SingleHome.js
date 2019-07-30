import React from 'react';
import SingleHeader from './SingleHeader';
import { Card, Icon, Image } from 'semantic-ui-react'
import SingleFooter from './SingleFooter';
import SingleRecipesCard from './SingleRecipesCard';
import SingleChefCard from './SingleChefCard';
const SingleHome = () => {
    return (
       
            <div className="singlehomeWrapper">
                <SingleHeader />
                <SingleRecipesCard />
                <SingleChefCard />
                <SingleFooter />
            </div>
    )
}
export default SingleHome