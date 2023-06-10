import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import { useNavigate } from "react-router-dom";
import Quiz_2 from "./Quiz_2";

function Quiz_1() {
  const navigate = useNavigate();
  return (
    <div className="quiz1_div">
      <h1 className="title_text">Choose Your Complexion Below!</h1>
      <div className="general_container">
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Quiz_2")}
        >
          <img
            src={pic3}
            alt="model picture"
            className="image_1"
            onClick={() => navigate("/Quiz_2")}
          />
          <p className="type_title__text">Light / Fair</p>
        </div>
        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Quiz_2")}
        >
          <img
            src={pic4}
            alt="model picture"
            className="image_1"
            onClick={() => navigate("/Quiz_2")}
          />
          <p className="type_title__text">Deep / Fair</p>
        </div>

        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Quiz_2")}
        >
          <img
            src={pic5}
            alt="model picture"
            className="image_1"
            onClick={() => navigate("/Quiz_2")}
          />
          <p className="type_title__text">Light / Brown</p>
        </div>

        <div
          id="img_div"
          className="pic1_image_div"
          onClick={() => navigate("/Quiz_2")}
        >
          <img
            src={pic6}
            alt="model picture"
            className="image_1"
            onClick={() => navigate("/Quiz_2")}
          />
          <p className="type_title__text">Deep / Chocolate</p>
        </div>
      </div>
    </div>
  );
}

export default Quiz_1;
