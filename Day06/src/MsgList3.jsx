import { useState } from "react";
import "./style.css";
const msgs = [
  "안녕하세요. 오늘의 일정입니다.",
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다.",
];
const InputMsg = ({ onCreate, setInput, input }) => {
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
    </div>
  );
};
const Message = ({ msg, index, onRemove, onModify }) => {
  return (
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
          <button
            onClick={() => {
              onModify(index, input);
            }}
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MessageList3() {
  const [input, setInput] = useState("");
  const [msgList, setMsgList] = useState([...msgs]);

  const onCreate = () => {
    console.log(msgList);
    setMsgList([...msgList, input]);
    setInput("");
  };
  const onRemove = (index) => {
    const updatedMsgList = [...msgList];
    updatedMsgList.splice(index, 1);
    setMsgList(updatedMsgList);
  };

  const onModify = (index, newValue) => {
    const updatedMsgList = [...msgList];
    updatedMsgList[index] = newValue;
    setMsgList(updatedMsgList);
  };

  return (
    <div>
      <InputMsg onCreate={onCreate} setInput={setInput} />
      {msgList.map((msg, index) => (
        <Message
          key={index}
          msg={msg}
          index={index}
          onRemove={onRemove}
          onModify={onModify}
          input={input}
        />
      ))}
    </div>
  );
}
