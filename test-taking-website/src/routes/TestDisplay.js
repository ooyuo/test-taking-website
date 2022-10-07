import "../css/TestDisplay.css";
import styled from "styled-components";

function TestDisplay() {
  return (
    <>
      <div className="container">
        <header>
          <div>
            <img src={require("../icons/test.png")} width="32" height="32" />
          </div>
          <div className="wrapper--question">
            <div className="question-status"></div>
            <div className="question-info-wrapper">
              <span className="question-number">Question 1.</span>
              <span className="question-processing">1 / 2</span>
            </div>
          </div>
          <div className="wrapper--question">
            <div className="question-status"></div>
            <div className="question-info-wrapper">
              <span className="question-number">Question 2.</span>
              <span className="question-processing">2 / 2</span>
            </div>
          </div>
          <button className="qustion-btn">
            <span>NEXT</span>
            <img
              src={require("../icons/right-arrow.gif")}
              width="30"
              height="30"
            />
          </button>
        </header>
      </div>
      <main></main>
      <footer></footer>
    </>
  );
}

export default TestDisplay;
