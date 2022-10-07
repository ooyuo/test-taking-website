import "../css/TestDisplay.css";
import "../css/TestResult.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function TestResult() {
  const text = useLocation();
  const answer = text.state.answer;

  console.log(answer + "dd");
  return (
    <>
      {answer == "concat" ? (
        <div className="wrapper-img">
          <img
            src={require("../icons/successfully-done.gif")}
            width="500"
            height="500"
          />
          <div className="correct">Correct !</div>
        </div>
      ) : (
        <div className="wrapper-img">
          <img src={require("../icons/fail.gif")} width="500" height="500" />
          <div className="incorrect">{`Incorrect :(`}</div>
        </div>
      )}
    </>
  );
}

export default TestResult;
