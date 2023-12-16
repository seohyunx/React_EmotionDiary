import React from "react";

const MyButton = ({ text, onClick }) => {
  return (
    <button className="MyButton" onClick={onClick}>
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
