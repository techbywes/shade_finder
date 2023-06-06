import React from "react";

function Nav() {
  return (
    <div className="nav_container">
      <div className="logo_text">UjvBeauty</div>
      <ul className="ul_">
        <li className="li_">
          <a href="#" className="a_">
            Shop Directly
          </a>
        </li>
        <li className="li_">
          <a href="#" className="a_">
            Book a Dermatologist
          </a>
        </li>
        <li id="need_help" className="li_">
          <a href="#" className="a_">
            Need Help?
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
