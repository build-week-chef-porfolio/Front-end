import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const tagOptions = [
  {
    key: 'Title',
    text: 'Title',
    value: 'Title',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Meal Type',
    text: 'Meal Type',
    value: 'Meal Type',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Chef',
    text: 'Chef',
    value: 'Chef',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'Ingredients',
    text: 'Ingredients',
    value: 'Ingredients',
    label: { color: 'purple', empty: true, circular: true },
  },
]

const DropdownFilterSearchInMenu = () => (
  <Dropdown
    text='Filter Recipes'
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
        {tagOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownFilterSearchInMenu;