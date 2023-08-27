import React from "react";
import '../App.css';
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from  "./CartSummary"

export default function Navi() {
  return (
    <div className="App">
      <Menu inverted  size="huge" fixed="top">  {/*inverted rengini siyah temaya çevirdi , oraya fixed yazsaydık sayfayı kaydırınca top bar bizle beraber aşağı gelirdi*/}
          <Container className="navileft">
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          </Container>

          <Container>
          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item >
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
