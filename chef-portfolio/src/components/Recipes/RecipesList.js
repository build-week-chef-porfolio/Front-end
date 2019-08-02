import React from 'react';
import RecipeCard from '../Recipes/RecipeCard';
import DropdownFilterSearchInMenu from './RecipeFilterRedone';
import ChefAddRecipe from '../Chef/ChefAddRecipe';

const RecipesList = (props) => {
  // const {recipesData, handleClick} = props;
  const recipesData = props.recipesData;
  const handleClick = props.handleClick;

  console.log('recipesData in RecipesList', recipesData)
  console.log('handleClick in RecipesList', handleClick)
  return (
    <>
    <div className='recipes-filter'>
      <DropdownFilterSearchInMenu handleClick={handleClick} recipesData={recipesData} />
    </div>

    <div className='chef-add-recipe'>
      <ChefAddRecipe handleClick={handleClick} recipesData={recipesData}s />
    </div>
    
    <div className='recipes-list'>
      
      {recipesData.map((recipeData) => {
        return <RecipeCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </div>
    </>
  )
}

export default RecipesList;