import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  //Query String 사용
  //useSearchParams()
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  //useNavigate()
  // 페이지를 이동 시킬 수 있는 함수를 하나 반환
  // navigate 기능은 링크 태그를 클릭 안 했을 때도 의도적으로 페이지를 바꿔버릴 수 있음
  // ex)로그인이 안된 사용자가 로그인을 시도할 때, 로그인값 검사를 해서
  // 로그인을 안 했다면 로그인페이지로 강제로 보내버릴 때 사용
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>이 곳은 일기수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "hyunrok" })}>
        QS 바꾸기
      </button>
    </div>
  );
};

export default Edit;
