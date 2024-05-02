import { useState, useRef } from "react";
import "./style.css";
const msgs = [
  "안녕하세요. 오늘의 일정입니다.",
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다.",
];

export default function MsgListLast() {
  //1. input을 반영할 스테이트 정의 [input,setInput]
  const [input, setInput] = useState("");
  //2. 리스트를 반영할 스테이트 정의 [msgList, setmsgList]
  const [msgList, setMsgList] = useState([...msgs]);

  const onCreate = () => {
    //3. msgList배열에 추가하는 코드 작성
    console.log(msgList);
    setMsgList([...msgList, input]);
    setInput("");
  };
  const onRemove = (index) => {
    //4. msgList배열을 삭제하는 코드 생성
    const updatedMsgList = [...msgList];
    updatedMsgList.splice(index, 1);
    setMsgList(updatedMsgList);
  };

  const onModify = (index, newValue) => {
    //7. msgList배열을 수정하는 코드 생성
    const updatedMsgList = [...msgList];
    updatedMsgList[index] = newValue;
    setMsgList(updatedMsgList);
  };

  return (
    <div>
      <h1> 일정 관리 </h1>
      <div class="container">
        <input
          type="text"
          name="msg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onCreate}>등록</button>
        <button onClick={() => setInput("")}>취소</button>
      </div>
      {/* 4. 배열을 리스트로 출력  */}
      {msgList.map((msg, index) => (
        <div>
          <div class="wrapper">
            {msg}
            <div class="control">
              <button
                onClick={() => {
                  onRemove(index);
                }}
              >
                삭제
              </button>
              {/* 5. 삭제버튼 작성, 함수호출  */}
              <button
                onClick={() => {
                  onModify(index, input);
                }}
              >
                수정
              </button>
              {/* 6. 수정버튼 작성, 함수호출  */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
