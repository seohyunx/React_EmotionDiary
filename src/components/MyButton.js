import React from "react";

//MyButton_${type}
//MyButton을 타입에 따라 동적으로 설정
const MyButton = ({ text, type, onClick }) => {
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//type Props를 전달하지 않으면 defaultProps로 실행
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
