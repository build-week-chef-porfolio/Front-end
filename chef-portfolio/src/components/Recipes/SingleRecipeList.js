import React from 'react';
import RecipeCard from '../Recipes/RecipeCard';
import DropdownFilterSearchInMenu from './RecipeFilterRedone';
import SingleMainMenu from '../Menu/SingleMenu';

const SingleRecipesList = (props) => {
  const {recipesData, onSearch, queryData} = props;
  // const recipesData = props.recipesData;
  // const onSearch = props.onSearch;
  // const queryData = props.queryData;

  return (
    <>
    <div className='single-recipes-Wrapper'>
        <SingleMainMenu />
      <div className='single-recipes-filter'>
        <DropdownFilterSearchInMenu onSearch={onSearch} recipesData={recipesData} />
      </div>

      <h2>Your search results...</h2>
      <div className='single-recipes-list'>
          
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

export default SingleRecipesList;