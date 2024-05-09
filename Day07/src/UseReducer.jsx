import { useState, useReducer } from "react";
const reducer = (state, action) => {
  //리듀서 함수 구현
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};
export default function UseReducer() {
  const [num, setNum] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0); //리듀서함수, 초기값
  const onIncrease = () => {
    // setNum(num + 1);
    //디스패치 함수 호출
    dispatch({ type: "INC" });
  };
  const onDecrease = () => {
    // setNum(num - 1);
    //디스패치 함수 호출
    dispatch({ type: "DEC" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
