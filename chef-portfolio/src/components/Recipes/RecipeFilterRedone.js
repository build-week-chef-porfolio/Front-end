import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

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
          <div className='name'>
            <label>
              Title:
            <input
                type='text'
                name='title'
                placeholder='Recipe Name'
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
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snack'>Snack</option>
                <option value='Appetizer'>Appetizer</option>
              </select>
            </label>
          </div>
          <div className='chef'>
            <label>
              Chef:
            <input
                type='text'
                name='chef'
                placeholder='Chef Name'
                value={query.chef}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className='ingredients'>
            <label>
              Ingredient:
            <input
                type='text'
                name='ingredient'
                placeholder='Main Ingredient'
                // id='role' 
                value={query.ingredient}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button>
            Find Recipe
            {/* {isEditing ? 'Edit Member!' : 'Add Member!'} */}
          </button>
        </fieldset>
      </form>
    </section>

    
  )
}

export default DropdownFilterSearchInMenu;