import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) { //Props bir obje olarak geliyor //Burda destructuring yaptık
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} primary>Giriş Yap</Button>
        <Button secondary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
