import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";

function Quiz_1() {
  return (
    <div className="quiz1_div">
      <h1 className="title_text">WHAT MODEL IS CLOSEST TO YOUR SKINTONE?</h1>
      <h3 className="range_text_span">Select your range:</h3>
      <div className="general_container">
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic1} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Fair Skin</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic2} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Light Skin</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic3} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Medium Skin</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic4} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Tan/Dark Skin</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic5} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Dark Skin</button>
          </div>
        </div>
        <div className="images_container">
          <div id="img_div" className="pic1_image_div">
            <img src={pic6} alt="model picture" className="image_1" />
          </div>
          <div className="btn_div">
            <button className="pic_btn">Deep Dark Skin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz_1;
