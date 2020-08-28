import React from "react";
import { HeaderStyle } from "./Header.module.scss";

const Header = ({ signOut, user }) => {
  return (
    <div className={HeaderStyle}>
      {/* Velkommen {user.displayName} */}
      <p onClick={signOut}>Click her for at logge ud</p>
    </div>
  );
};

export default Header;
