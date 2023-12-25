import React from "react";

//MyButton_${type}
//MyButton을 타입에 따라 동적으로 설정
const MyButton = ({ text, type, onClick }) => {
  //btnType이 이 배열 안에 있다면 ? type 반환 : 없다면 'default'를 반환
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    ></button>
  );
};

//type Props를 전달하지 않으면 defaultProps로 실행
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
