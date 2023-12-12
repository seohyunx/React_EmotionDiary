import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteTest from "./components/RouteTest";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          {/* path가 /(인덱스)를 가리키면 <Home/> 컴포넌트를 렌더링하라 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          {/* Path Variable: URL의 일부를 변수로 사용하는 방식 */}
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        {/* <a href={"/new"}>NEW로 이동</a> */}
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
