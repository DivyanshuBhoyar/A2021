import React from "react";
import "../styles.css";
import "../styles/nav.css";

export default function NavBarGlobal() {
  return (
    <>
      <div className="navbarwrap">
        <div className="navitem">EVENTS</div>
        <div className="navitem">REGISTER</div>
        <div className="navitem brand">ADHYAAYA 2021</div>
        <div className="navitem">GALLERY</div>
        <div className="navitem">ABOUTUS</div>
      </div>
    </>
  );
}
