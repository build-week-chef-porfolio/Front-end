import React from 'react';
import RecipeCard from '../Recipes/RecipeCard.js';
import DropdownFilterSearchInMenu from '../Recipes/RecipesFilter';
import Header from '../Header/Header.js';
import RecipesList from '../Recipes/RecipesList';

const HomePageContainer = () => {

    return (
        <div className="HomePageWrapper">
            <p>THIS IS MAIN BODY CONTAINER</p>
            <Header />
            <DropdownFilterSearchInMenu />
            <RecipeCard />
            <RecipesList />
        </div>
    )


}

export default HomePageContainer