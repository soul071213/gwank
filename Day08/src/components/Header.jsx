
import React from "react";
import "../style.css";

export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://insidetravel.news/wp-content/uploads/2018/10/airbnblogo.png"
          className="logo"
          alt="Logo"
        />
      </a>
    </div>
  );
}