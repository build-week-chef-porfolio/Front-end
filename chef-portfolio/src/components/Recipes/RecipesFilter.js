import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const DropdownFilterSearchInMenu = (props) => {

  const recipesData = props.recipesData;

  return (
    <>
    <Menu>
      <Dropdown
        text='Title'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.title}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Chef'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.chef_id}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Meal Type'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.meal_type}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Ingredient'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.ingredient}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Search recipes...' />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
        </Menu.Menu>
    </Menu>
    </>
  )

}

export default DropdownFilterSearchInMenu;