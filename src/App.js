import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// Components
import MyButton from "./components/MyButton";

function App() {
  //process.env가 작동하지 않을 때 참고
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />
        <Routes>
          {/* path가 /(인덱스)를 가리키면 <Home/> 컴포넌트를 렌더링하라 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          {/* Path Variable: URL의 일부를 변수로 사용하는 방식 */}
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        {/* <a href={"/new"}>NEW로 이동</a> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
