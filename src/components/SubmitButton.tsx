import React from "react";

type Props = {
  clickHandler: Function;
  num: number;
};

const SubmitButton: React.FC<Props> = ({ clickHandler, num }) => {
  return (
    <button
      onClick={(): React.MouseEventHandler<HTMLButtonElement> | void => {
        clickHandler();
      }}
    >
      submit {num}
    </button>
  );
};

export default SubmitButton;
