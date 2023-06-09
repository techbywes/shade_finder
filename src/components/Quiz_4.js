import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz_5 from "./Quiz_5";

function Quiz_4() {
  const navigate = useNavigate();
  return (
    <div className="quiz_4_div" onClick={() => navigate("/Quiz_5")}>
      <h1 className="silver_title_text">
        HOW DOES YOUR SKIN REACT IN THE SUN?
      </h1>
      <div className="box_container">
        <div id="silver_div4" className="silver_div4">
          <h4 id="text_quiz4" className="silver_text4">
            BURNS EASILY AND <br /> RARELY TANS
          </h4>
        </div>
        <div id="gold_div4" className="silver_div4">
          <h4 id="text_quiz4" className="silver_text4">
            TANS EASILY / <br /> RARELY BURNS
          </h4>
        </div>
        <div id="both_div4" className="silver_div4">
          <h4 id="text_quiz4" className="silver_text4">
            SOMETIMES BURNS / <br /> SOMETIMES TANS
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Quiz_4;
