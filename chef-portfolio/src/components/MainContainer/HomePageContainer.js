import React from 'react';
import RecipeCard from '../Recipes/RecipeCard.js';
import DropdownFilterSearchInMenu from '../Recipes/RecipeFilter';
import Header from '../Header/Header.js';

const HomePageContainer = () => {

    return (
        <div className="HomePageWrapper">
            <p>THIS IS MAIN BODY CONTAINER</p>
            <Header />
            <DropdownFilterSearchInMenu />
            <RecipeCard />
        </div>
    )


}

export default HomePageContainer