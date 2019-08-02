import React, { useState } from 'react';
import ChefCard from './ChefCard';

const ChefDropdownFilterSearchInMenu = (props) => {
  const chefsData = props.chefsData;
  const onSearch = props.onSearch;

  const [query, setQuery] = useState({
    first_name: '',
    last_name: '',
    zipcode: '',
    city: ''
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
              <div className='meal-type'>
            <label>
              Chef Type:
              <select onChange={handleInputChange} id='zipcode' name='zipcode'>
                {/* {recipesData.forEach(recipe => {
                  return <option value={recipe.meal_type}>{recipe.meal_type}</option>
                })} */}
                <option value='Executive Chef'>Executive Chef</option>
                <option value='Head Chef'>Head Chef</option>
                <option value='Sous Chef'>Sous Chef</option>
              </select>
            </label>
            <p>What type of Chef are you looking for?</p>
          </div>
          <div className='zipcode'>
            <label>
              Zipcode
            <input
                type='text'
                name='Zipcode'
                placeholder=''
                // id='role' 
                value={query.ingredient}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <p>or</p>
          <div className='zipcode'>
            <label>
              City
            <input
                type='text'
                name='City'
                placeholder=''
                // id='role' 
                value={query.ingredient}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <p>Where is the event or gathering?</p>
          <button>
            Search
            {/* {isEditing ? 'Edit Member!' : 'Add Member!'} */}
          </button>
        </fieldset>
      </form>
    </section>

    
  )
}

export default ChefDropdownFilterSearchInMenu;