import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz_4 from "./Quiz_4";

function Quiz_3() {
  const navigate = useNavigate();
  return (
    <div className="quiz_3_div">
      <h1 className="silver_title_text">SELECT YOUR SKIN TYPE BELOW! </h1>
      <div className="box_container">
        <div
          id="silver_div1"
          className="silver_div"
          onClick={() => navigate("/Quiz_4")}
        >
          <h2 id="text_quiz3" className="silver_text">
            NORMAL SKIN
          </h2>
        </div>
        <div
          id="silver_div1"
          className="silver_div"
          onClick={() => navigate("/Quiz_4")}
        >
          <h2 id="text_quiz3" className="silver_text">
            DRY SKIN
          </h2>
        </div>
        <div
          id="gold_div2"
          className="silver_div"
          onClick={() => navigate("/Quiz_4")}
        >
          <h2 id="text_quiz3" className="silver_text">
            OILY SKIN
          </h2>
        </div>
        <div
          id="both_div3"
          className="silver_div"
          onClick={() => navigate("/Quiz_4")}
        >
          <h2 id="text_quiz3" className="silver_text">
            COMBINATION
          </h2>
        </div>
        <div
          id="both_div3"
          className="silver_div"
          onClick={() => navigate("/Quiz_4")}
        >
          <h2 id="text_quiz3" className="silver_text">
            SENSITIVE
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Quiz_3;
