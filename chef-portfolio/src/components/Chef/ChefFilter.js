import React, { useState } from 'react';
import ChefCard from './ChefCard';
import { Grid } from 'semantic-ui-react';
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
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  const preOnSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <section className="search-form">
      <form onSubmit={(event) => preOnSearch(event)}>
        <fieldset>
        <Grid>
          <Grid.Column width={6}>
          {/* <legend>Add Recipe</legend> */}
              <div className='meal-type'>
            <label>
              Chef Type:
              <select onChange={handleInputChange} id='chef_type' name='chef_type'>
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
          </Grid.Column>
          <Grid.Column width={6}>
          <div className='zipcode'>
            <label>
              Zipcode
            <input
                type='text'
                name='Zipcode'
                placeholder=''
                // id='role' 
                value={query.zip_code}
                onChange={handleInputChange}
              />
            </label>
            <p>or</p>
            <div className='zipcode'>
            <label>
              City
            <input
                type='text'
                name='City'
                placeholder=''
                // id='role' 
                value={query.cirt}
                onChange={handleInputChange}
              />
            </label>
          </div>
          </div>      
          <p>Where is the event or gathering?</p>
          </Grid.Column>
          <Grid.Column width={3}>
          <button>
            Search
          </button>
          </Grid.Column>
          </Grid>
        </fieldset>
        
      </form>
    </section>

    
  )
}

export default ChefDropdownFilterSearchInMenu;