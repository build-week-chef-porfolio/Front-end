import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Grid } from 'semantic-ui-react';

const DropdownFilterSearchInMenu = (props) => {
  const recipesData = props.recipesData;
  const onSearch = props.onSearch;

  const [query, setQuery] = useState({
    title: '',
    mealType: '',
    chef: '',
    ingredient: ''
  });

  const handleInputChange = (event) => {
    // console.log('event.target.name', event.target.name)
    // console.log('event.target.value', event.target.value)
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  // console.log(query)

  const preOnSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    
    <section className="search-form">
      <form onSubmit={(event) => preOnSearch(event)}>
        <fieldset>
          {/* <legend>Add Recipe</legend> */}
          <Grid>
          <Grid.Column width={6}>
          <div className='name'>
            <label>
              Recipe Title:
            <input
                type='text'
                name='title'
                value={query.title}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className='meal-type'>
            <label>
              Meal Type:
              <select onChange={handleInputChange} id='meal-type' name='meal-type'>
                {/* {recipesData.forEach(recipe => {
                  return <option value={recipe.meal_type}>{recipe.meal_type}</option>
                })} */}
                <option value=''></option>
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snack'>Snack</option>
                <option value='Appetizer'>Appetizer</option>
              </select>
            </label>
          </div>
          
          </Grid.Column>
          <Grid.Column width={6}>
          <div className='chef'>
            <label>
              Chef Name:
            <input
                type='text'
                name='chef'
                value={query.chef}
                onChange={handleInputChange}
              />
            </label>
          </div>
          
          <div className='ingredients'>
            <label>
              Main Ingredient:
            <input
                type='text'
                name='ingredient'
                // id='role' 
                value={query.ingredient}
                onChange={handleInputChange}
              />
            </label>
          </div>
          </Grid.Column>
          <Grid.Column width={3}>
          <button>
            Find Recipe
            {/* {isEditing ? 'Edit Member!' : 'Add Member!'} */}
          </button>
          </Grid.Column>
          </Grid>
        </fieldset>
      </form>
    </section>
 
    
  )
}

export default DropdownFilterSearchInMenu;