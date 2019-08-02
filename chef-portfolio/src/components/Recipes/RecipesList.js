import React from 'react';
import RecipeCard from '../Recipes/RecipeCard';
import DropdownFilterSearchInMenu from './RecipeFilterRedone';
import ChefAddRecipe from '../Chef/ChefAddRecipe';

const RecipesList = (props) => {
  // const {recipesData, onSearch, queryData} = props;
  const recipesData = props.recipesData;
  const onSearch = props.onSearch;
  const queryData = props.queryData;

  return (
    <>
    <div className='recipes-filter'>
      <DropdownFilterSearchInMenu onSearch={onSearch} recipesData={recipesData} />
    </div>

    <div className='recipes-list'>
    {(queryData) ? (
        <RecipeCard recipeData={queryData} />
      ) : (
        recipesData.map((recipeData) => {
          return <RecipeCard
            key={recipeData.id}
            recipeData={recipeData}
          />
        })
      )
    }
    </div>
    
    {/* <div className='recipes-list'>
      
      {recipesData.map((recipeData) => {
        return <RecipeCard 
          key={recipeData.id}
          recipeData={recipeData}
        />
      })}
    </div> */}
    </>
  )
}

export default RecipesList;