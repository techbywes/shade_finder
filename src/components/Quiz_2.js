import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz_3 from "./Quiz_3";



function Quiz_2() {
  const navigate = useNavigate();
  return (
    <div className="quiz_2_div" onClick={()=>navigate('/Quiz_3')}>
      <h1 className="silver_title_text">
        WHAT TYPE OF JEWELRY LOOKS BEST ON YOU?
      </h1>
      <div className="box_container">
        <div id="silver_div" className="silver_div">
          <h2 className="silver_text">SILVER</h2>
          <p className="silver_text1">Silver jewelry looks best on me.</p>
          <p className="silver_text2">My veins are blue</p>
        </div>
        <div id="gold_div" className="silver_div">
          <h2 className="silver_text">GOLD</h2>
          <p className="silver_text1">Gold jewelry looks best on me.</p>
          <p className="silver_text2">My veins are green.</p>
        </div>
        <div id="both_div" className="silver_div">
          <h2 className="silver_text">BOTH</h2>
          <p id="both_text" className="silver_text1">
            Both gold & silver jewelry look good.
          </p>
          <p className="silver_text2">My veins are blue & green.</p>
        </div>
      </div>
    </div>
  );
}

export default Quiz_2;
