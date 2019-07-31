import React from 'react';
import RecipeCard from '../Recipes/RecipeCard.js';
import DropdownFilterSearchInMenu from '../Recipes/RecipesFilter';
import Header from '../Header/Header.js';
import RecipesList from '../Recipes/RecipesList';

const HomePageContainer = (props) => {
    const recipesData = props.recipesData;
    return (
        <div className="HomePageWrapper">
            <Header />
            <RecipesList recipesData={recipesData} />
        </div>
    )


}

export default HomePageContainer