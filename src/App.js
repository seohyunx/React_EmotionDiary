import { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

function App() {
  //process.env가 작동하지 않을 때 참고
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT

  return (
    <BrowserRouter>
      <div className="App">
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
