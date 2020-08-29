import React from "react";
import { HeaderStyle } from "./Header.module.scss";

const Header = ({ signOut }) => {
  return (
    <div className={HeaderStyle}>
      <p onClick={signOut}>Click her for at logge ud</p>
    </div>
  );
};

export default Header;
