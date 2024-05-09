



import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Condition() {
  // 1. login 변수를 useState로 선언
  const [login, setLogin] = useState(false);

  // 로그인 상태에 따라 로그인 버튼을 클릭할 때마다 상태를 토글하는 함수
  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div>
      {/* 조건1) 로그인 전에는 “모두 함께 리액트 공부” 요소가 보였다가, 로그인 후에는 사라지도록 작성 */}
      {!login && <div>모두 함께 리액트 공부</div>}

      <div className="wrapp">
        {/* 조건2) 로그인 후에는 버튼이 [로그아웃] 버튼으로 보이도록 함 */}
        <button onClick={toggleLogin}>{login ? "로그아웃" : "로그인"}</button>
      </div>
      
      <hr />
      
      {/* 조건3) 로그인 여부에 따라 특정 <div> 요소를 렌더링 */}
      {login && <div>로그인 되었습니다.</div>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Condition />);











import ReactDOM from "react-dom/client";
import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  // input 값 변경 시 호출되는 함수
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // 초기화 버튼 클릭 시 호출되는 함수
  const handleReset = () => {
    setText("");
  };

  return (
    <div className="App">
      <p>
        <input
          type="text"
          value={text} // 조건1) input에 입력한 값을 useState를 사용하여 관리
          onChange={handleInputChange} // 조건1) input 값이 변경될 때마다 호출되는 함수
        />
        <button onClick={handleReset}>초기화</button> {/* 조건1) 초기화 버튼 클릭 시 호출되는 함수 */}
      </p>
      <hr />
      {text ? (
        <div id="modal">
          입력한 값은 <span style={{ color: "orangered" }}>{text}</span> 입니다. {/* 조건1) 입력한 값 출력 */}
        </div>
      ) : null}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Input />);
