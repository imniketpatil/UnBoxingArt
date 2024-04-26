import React from "react";
import styles from "./nav-bar.module.css";
const NavBar = () => {
  return (
    <nav className={`${styles.nav}`}>
      <div className="logo">
        <img src="../images/Logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default NavBar;
