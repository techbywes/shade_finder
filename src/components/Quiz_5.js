import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import { useNavigate } from "react-router-dom";
import light_fair from "./light_fair";
import Deep_fair from "./Deep_fair";
import Deep_chocolate from "./Deep_chocolate";
import Light_brown from "./Light_brown";

function Quiz_5() {
  const navigate = useNavigate();
  return (
    <div className="Quiz_5_div">
      <h1 className="title_text">WHAT MODEL IS CLOSEST TO YOUR SKINTONE?</h1>
      <div className="general_container">
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/light_fair")}
        >
          <img src={pic3} alt="model picture" className="image_1" />
          <p className="type_title__text">Light / Fair</p>
        </div>
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Deep_fair")}
        >
          <img src={pic4} alt="model picture" className="image_1" />
          <p className="type_title__text">Deep / Fair</p>
        </div>
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Light_brown")}
        >
          <img src={pic5} alt="model picture" className="image_1" />
          <p className="type_title__text">Light / Brown</p>
        </div>
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Deep_chocolate")}
        >
          <img src={pic6} alt="model picture" className="image_1" />
          <p className="type_title__text">Deep / Chocolate</p>
        </div>
      </div>
    </div>
  );
}

export default Quiz_5;
