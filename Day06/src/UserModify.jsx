import React, { useRef, useState } from "react";

const User = ({ user, onRemove, onModify }) => {
  const { id, name, email } = user;
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const handleModify = () => {
    onModify(id, newName, newEmail);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button onClick={handleModify}>수정 완료</button>
        </>
      ) : (
        <>
          <b>{name}</b>
          <span>{email}</span>
          <button onClick={() => onRemove(id)}>삭제</button>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
    </div>
  );
};

export default function UserModify() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { name, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
    },
  ]);
  const nextId = useRef(4); //useRef로 4 설정
  const inputRef = useRef(); //useRef로 설정
  // nextId값 1 증가
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name : '소마고', email : 'abc@gmail.com'
    });
  }; //input값이 변경될때 iputs useState에 반영되도록 수정
  const onCreate = () => {
    const user1 = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, user1]);
    nextId.current += 1;
  };
  const onRemove = (id) => {
    //삭제함수 filter사용
    const rmUser = users.filter((user) => user.id !== id);
    setUsers(rmUser);
  };
  const onModify = (id, newName, newEmail) => {
    const modifiedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, name: newName, email: newEmail };
      }
      return user;
    });
    setUsers(modifiedUsers);
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        ref={inputRef}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>{" "}
      {users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onModify={onModify}
          />
        );
      })}
    </div>
  );
}
