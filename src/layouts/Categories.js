import React from "react";
import { NavLink } from "react-router-dom";
import {Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div >
      <Menu pointing vertical>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
