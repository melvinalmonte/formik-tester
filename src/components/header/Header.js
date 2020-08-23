import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Main navigation"
      style={{ justifyContent: "center" }}
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title">My Formik Tester</h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
