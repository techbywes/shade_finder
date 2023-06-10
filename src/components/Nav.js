import React from "react";
import { Link, Route, Routes, Switch } from "react-router-dom";
import Header from "./Header";

function Nav() {
  return (
    <>
      <nav className="nav_container">
        <div className="logo_text">
          <Link to="/" className="logo_text_a">
            UjvBeauty
          </Link>
        </div>
        <ul className="ul_">
          <li className="li_">
            <Link to="https://ujvbeauty.com/" className="a_">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
