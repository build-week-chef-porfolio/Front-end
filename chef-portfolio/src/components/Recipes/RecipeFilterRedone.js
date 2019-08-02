import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const DropdownFilterSearchInMenu = (props) => {
  const recipesData = props.recipesData;
  const handleSubmit = props.handleClick;

  const [query, setQuery] = useState({
    name: '',
    type: ''
  });

  const handleInputChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  return (
    <section className="search-form">
      {/* <div class="container">
        <form action="action_page.php">
          <div class="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div class="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Country</label>
            </div>
            <div class="col-75">
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Subject</label>
            </div>
            <div class="col-75">
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div> */}
      <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
          {/* <legend>Add Recipe</legend> */}
          <div className='name'>
            <label>
              Title:
            <input
                type='text'
                name='name'
                placeholder='Recipe Name'
                // value={member.name}
                // onChange={handleChange}
              />
            </label>
          </div>
          <div className='meal-type'>
            <label>
              Meal Type:
              <select id='meal-type' name='meal-type'>
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
                // value={member.email}
                // onChange={handleChange}
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
                // value={member.role}
                // onChange={handleChange}
              />
            </label>
          </div>
          <button>
            Add Recipe
            {/* {isEditing ? 'Edit Member!' : 'Add Member!'} */}
          </button>
        </fieldset>
      </form>
    </section>

    
  )
}

export default DropdownFilterSearchInMenu;