import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label} from "semantic-ui-react";
import {useSelector} from "react-redux"
export default function CartSummary() {
  const {cartItems}= useSelector(state => state.cart) //Store'daki cart state'ini cartItems'a atadık
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map(item => (
          <Dropdown.Item key={item.product.id}>
            {item.product.productName}
            <Label style={{margin:"0.5em"}}>
              {item.quantity}
            </Label>
            </Dropdown.Item>
          
          ))}
          <Dropdown.Divider/>
          <Dropdown.Item as ={NavLink} to="/cart"> Sepete Git </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
