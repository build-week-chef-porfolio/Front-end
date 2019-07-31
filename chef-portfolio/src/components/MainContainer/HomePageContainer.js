import React from 'react';
import DropdownFilterSearchInMenu from '../Recipes/RecipesFilter';
import Header from '../Header/Header.js';
import RecipesList from '../Recipes/RecipesList';

const HomePageContainer = (props) => {
    const recipesData = props.recipesData;
    return (
        <div className="HomePageWrapper">
            <p>THIS IS MAIN BODY CONTAINER</p>
            <Header />
            <DropdownFilterSearchInMenu recipesData={recipesData} />
            <RecipesList recipesData={recipesData} />
        </div>
    )


}

export default HomePageContainer