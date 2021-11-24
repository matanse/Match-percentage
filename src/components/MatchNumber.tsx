import React, { ChangeEvent, useState } from "react";

const MatchNumber: React.FC = () => {
  const [name1, setName1] = useState("name 1");
  const [name2, setName2] = useState("name 2");

  const changeHandler = (e: any) => {
    if (e.target.id === "name1") {
      setName1(e.target.value);
    } else if (e.target.id === "name2") {
      setName2(e.target.value);
    }
    console.log(name1);
    console.log(name2);
  };

  const getRandomNumber = () => {
    const number = Math.round(Math.random() * 100);
    return number;
  };
  return (
    <div>
      <div className="nameInput">
        <input
          onChange={(e) => changeHandler(e)}
          id="name1"
          placeholder="name"
          type="text"
        />
        <input
          onChange={(e) => {
            changeHandler(e);
          }}
          id="name2"
          placeholder="second name"
          type="text"
        />
      </div>
      <div className="displayNames">
        <h1>{name1}</h1>
        <h1>{name2}</h1>
      </div>
      <div className="number">
        <h1>{getRandomNumber()}%</h1>
      </div>
    </div>
  );
};

export default MatchNumber;
