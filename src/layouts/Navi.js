import React, { useState } from "react";
import "../App.css";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useNavigate} from "react-router-dom"

export default function Navi() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  function handleSign() {
    setIsAuthenticated(!isAuthenticated) //Bunu kendim düşündüm
    isAuthenticated && navigate("/") // signedOut'ta isem
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
