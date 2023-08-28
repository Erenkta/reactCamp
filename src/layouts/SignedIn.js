import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182"
        />
        <Dropdown pointing="top right" text="Engin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/> 
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/> 
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
