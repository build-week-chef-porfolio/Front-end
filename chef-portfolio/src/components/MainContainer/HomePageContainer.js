import React from 'react';
import DropdownFilterSearchInMenu from '../Recipes/RecipesFilter';
import Header from '../Header/Header.js';
import RecipesList from '../Recipes/RecipesList';
import ChefList from '../Chef/ChefList';

const HomePageContainer = (props) => {
    const recipesData = props.recipesData;
    const chefsData = props.chefsData;
    return (
        <div className="HomePageWrapper">
            <Header />
            <RecipesList recipesData={recipesData} />
            <ChefList chefsData={chefsData} />
        </div>
    )


}

export default HomePageContainer