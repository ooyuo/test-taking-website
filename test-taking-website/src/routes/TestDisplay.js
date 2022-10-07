import "../css/TestDisplay.css";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function TestDisplay() {
  let [text, setText] = useState("______");
  const changeText = (e) => {
    text = e.target.value;
    setText(text);
  };

  return (
    <>
      <div className="container">
        <header>
          <div>
            <img src={require("../icons/test.png")} width="40" height="40" />
          </div>

          <div className="qustion-btn">
            <Link
              className="link"
              to={{
                pathname: `/test-taking-website/result/`,
                state: { answer: text },
              }}
            >
              <span>SUBMIT</span>
              <img
                src={require("../icons/right-arrow.gif")}
                width="30"
                height="30"
              />
            </Link>
          </div>
        </header>
      </div>
      <main>
        <div className="container">
          <div className="main--question_number">
            Question - Merge multiple arrays together
          </div>
          <div className="main--question_text">Choose appropriate options.</div>
          <div className="question">
            <span className="block--blue">const </span>fruits = [
            <span className="block--green">
              'Apple', 'Banana', 'Strawberry'
            </span>
            ];
            <br />
            <span className="block--blue">const</span> moreFruits = [
            <span className="block--green">'Mango', 'Cherry'</span>];
            <br />
            <span className="block--blue">const </span>combinedFruits = fruits.
            <span className="block--red">
              <span className="yourAnswer" value={text}>
                {text}
              </span>
            </span>
            (moreFruits);
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
        <div className="container">
          <div className="question--item">
            <button className="item" value="push" onClick={changeText}>
              push
            </button>
            <button className="item" value="shift" onClick={changeText}>
              shift
            </button>
            <button className="item" value="concat" onClick={changeText}>
              concat
            </button>
            <button className="item" value="map" onClick={changeText}>
              map
            </button>
            <button className="item" value="reduce" onClick={changeText}>
              reduce
            </button>
            <button className="item" value="slice" onClick={changeText}>
              slice
            </button>
            <button className="item" value="splice" onClick={changeText}>
              splice
            </button>
            <button className="item" value="sort" onClick={changeText}>
              sort
            </button>
            <button className="item" value="every" onClick={changeText}>
              every
            </button>
            <button className="item" value="flatMap" onClick={changeText}>
              flatMap
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default TestDisplay;
