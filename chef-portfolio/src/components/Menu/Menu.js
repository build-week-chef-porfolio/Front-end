import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const MainMenu = () => {

    return (
      <Menu>
        <Menu.Item>
          Editorials
        </Menu.Item>

        <Menu.Item>
          Reviews
        </Menu.Item>

        <Menu.Item>
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
}

export default MainMenu