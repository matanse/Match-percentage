import React, { useState } from "react";

const MatchNumber: React.FC = () => {
  const [name1, setName1] = useState(String);
  const [name2, setName2] = useState(String);

  const changeHandler = (e: any) => {
    if (e.target.id === "name1") {
      setName1(e.target.value);
    } else if (e.target.id === "name2") {
      setName2(e.target.value);
    }
  };

  const getRandomNumber = () => {
    const number = Math.round(Math.random() * 100);
    return number;
  };

  return (
    <div>
      <div className="nameInput">
        <p>How does -</p>
        <input
          onChange={(e) => changeHandler(e)}
          id="name1"
          placeholder="name"
          type="text"
        />
        <p>- match with -</p>
        <input
          onChange={(e) => {
            changeHandler(e);
          }}
          id="name2"
          placeholder="second name"
          type="text"
        />
        <p>?</p>
      </div>
      <div className="displayNames">
        <h1>{name1}</h1>
        <div className="number">
          <h1>{getRandomNumber()}%</h1>
        </div>
        <h1>{name2}</h1>
      </div>
    </div>
  );
};

export default MatchNumber;
