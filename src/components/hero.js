import React from "react";
import Hero_image from "../images/hero_image.png";
import Shop from "../images/shopping-cart.png";
import Doctor from "../images/medical-assistance.png";
import Suppor from "../images/customer-support.png";

function Hero() {
  return (
    <div className="Hero_div">
      <h1 className="hero_title_text">SHADE FINDER</h1>
      <p className="hero_paragraph_text">
        Take our 5 question quiz to find which of our foundation shades is
        the best match for you!
      </p>
      <button class="start_btn">Let's Go!</button>
    </div>
  );
}

export default Hero;
