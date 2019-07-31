import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const DropdownFilterSearchInMenu = () => {
  return (
    <>
      <Dropdown
        text='Title'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Input icon='search' iconPosition='left' className='search' />
          <Dropdown.Divider />
          <Dropdown.Header icon='tags' content='Tag Label' />
          <Dropdown.Menu scrolling>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
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
          <Input icon='search' iconPosition='left' className='search' />
          <Dropdown.Divider />
          <Dropdown.Header icon='tags' content='Tag Label' />
          <Dropdown.Menu scrolling>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
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
          <Input icon='search' iconPosition='left' className='search' />
          <Dropdown.Divider />
          <Dropdown.Header icon='tags' content='Tag Label' />
          <Dropdown.Menu scrolling>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
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
          <Input icon='search' iconPosition='left' className='search' />
          <Dropdown.Divider />
          <Dropdown.Header icon='tags' content='Tag Label' />
          <Dropdown.Menu scrolling>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )

}

export default DropdownFilterSearchInMenu;