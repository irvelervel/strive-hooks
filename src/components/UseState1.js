import React, { useState } from "react";
import "../App.css";

function UseState1() {
  const [buttonText, setButtonText] = useState("Please click me!");
  const [appText, setAppText] = useState("not clicked yet");

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setButtonText("I have been clicked");
            setAppText("clicked!");
          }}
        >
          {buttonText}
        </button>
        {appText}
      </header>
    </div>
  );
}

export default UseState1;
