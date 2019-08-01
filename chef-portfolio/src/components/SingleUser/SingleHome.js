import React from 'react';
import SingleHeader from './SingleHeader';
import { Card, Icon, Image } from 'semantic-ui-react'
import SingleFooter from './SingleFooter';
import SingleRecipesCard from './SingleRecipesCard';
import SingleChefCard from './SingleChefCard';
import SingleRecipesList from './SingleRecipesList';

const SingleHome = (props) => {
    const recipesData = props.recipesData;
    return (
       
            <div className="singlehomeWrapper">
                <SingleHeader />
                <SingleRecipesList recipesData={recipesData} />
                <SingleChefCard />
                <SingleFooter />
            </div>
    )
}
export default SingleHome