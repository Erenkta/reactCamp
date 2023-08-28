import React, { useState } from "react";
import "../App.css";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  function handleSign() {
    setIsAuthenticated(!isAuthenticated) //Bunu kendim düşündüm
  }
  
  return (
    <div className="App">
      <Menu inverted size="huge" fixed="top">
        {/*inverted rengini siyah temaya çevirdi , oraya fixed yazsaydık sayfayı kaydırınca top bar bizle beraber aşağı gelirdi*/}
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn signOut = {handleSign}/> : <SignedOut signIn={handleSign}/>} {/*Alt component'e data gecmek signOut = {handleSignOut} bunlara props denir! */ }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
