import React, { useState } from "react";
import "./css/App.css";

// Components
import SubmitButton from "./components/SubmitButton";

function App() {
  const [clickCount, setClickCount] = useState(1);
  const clickHandler = () => {
    console.log(`click ${clickCount}`);
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <SubmitButton clickHandler={clickHandler} num={clickCount} />
    </div>
  );
}

export default App;
