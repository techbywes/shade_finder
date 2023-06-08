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
      <h1 className="title_text">CHOOSE YOUR COMPLESSION BELOW!</h1>
      <div className="general_container"  onClick={()=>navigate('/Quiz_2')}>
        {/* <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic1} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn" onClick={()=>navigate('/Quiz_2')}>Fair Skin</button>
          </div>
        </div> */}
        {/* <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic2} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Light Skin</button>
          </div>
        </div> */}
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic3} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Light / Fair</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic4} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Deep / Fair</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic5} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Light / Brown</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic6} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Deep / Chocolate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz_1;
