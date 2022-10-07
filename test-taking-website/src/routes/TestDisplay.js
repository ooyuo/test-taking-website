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
      <main>
        <div className="container">
          <div className="main--question_number">
            Question 1 - Merge multiple arrays together
          </div>
          <div className="main--question_text">Choose appropriate options.</div>
          <div className="question">
            <span className="block--blue">const </span>fruits = [
            <span className="block--green">
              'Apple', 'Banana', 'Strawberry']
            </span>
            ;<br />
            <span className="block--blue">const</span> moreFruits = [
            <span className="block--green">'Mango', 'Cherry'</span>];
            <br />
            <span className="block--blue">const </span>combinedFruits = fruits.
            <span className="block--red">concat</span>(moreFruits);
            <br />
            console.<span className="block--red">log</span>(combinedFruits);
            <br />
            <span className="block--grey">
              // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]
            </span>
            <br />
            <br />
            <span className="block--grey">
              // The 'fruits' array remains unchanged.
            </span>
            <br />
            console.<span className="block--red">log</span>(fruits);
            <br />
            <span className="block--grey">
              // The 'fruits' array remains unchanged.
            </span>
            <br /> <br />
            <span className="block--grey">
              // The 'moreFruits' array also remains unchanged.
            </span>
            <br />
            console.<span className="block--red">log</span>(moreFruits);
            <br />
            <span className="block--grey">// ["Mango", "Cherry"]</span>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default TestDisplay;
