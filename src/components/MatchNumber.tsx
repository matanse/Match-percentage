import React from "react";

const MatchNumber: React.FC = () => {
  const getRandomNumber = () => {
    const number = Math.round(Math.random() * 100);
    return number;
  };
  return (
    <div>
      <div className="nameInput">
        <input placeholder="name" type="text" />
        <input placeholder="second name" type="text" />
      </div>
      <div className="number">
        <h1>{getRandomNumber()}%</h1>
      </div>
    </div>
  );
};

export default MatchNumber;
