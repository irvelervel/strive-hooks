import React, { useState, useEffect } from "react";
import "../App.css";

function UseEffect() {
  const [buttonText, setButtonText] = useState("Please click me!");
  const [appText, setAppText] = useState("not clicked yet");

  useEffect(() => {
    //console.log("exiting")
    console.log("USEEFFECT");
    return () => console.log("EXITING");
  });

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setButtonText("I have been clicked");
          }}
        >
          {buttonText}
        </button>
        {appText}
      </header>
    </div>
  );
}

export default UseEffect;
