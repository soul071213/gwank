import { useRef, useState } from "react";
import "./style.css";

const User = ({ user, onRemove, onToggle, onModify }) => {
  //props로 객체를 받는 경우 {}로 받음

  const { id, name, email } = user;
  console.log(id, name, email);
  return (
    <>
      <td>{id}</td>
      <td>
        <b
          style={{
            cursor: "pointer",
            color: user.selected ? "green" : "black",
          }}
          onClick={() => onToggle(id, user)}
        >
          {name}
        </b>
      </td>
      <td>{email}</td>
      <td>
        <button onClick={() => onRemove(id)}>삭제</button> &nbsp;&nbsp;
        {/* 삭제 버튼 클릭시 id로 remove 함수 호출  */}
        <button onClick={() => onModify(user, id)}>수정</button>
        {/* 삭제 버튼 클릭시 id로 remove 함수 호출  */}
      </td>
    </>
  );
};
const UserInput = ({ name, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};
const UserList = ({ users, onRemove, onToggle, onModify }) => {
  //User컴포넌트에 있는 onRemove함수 전달
  return (
    <table>
      <thead>
        <tr>
          <th>연번</th>
          <th>이름</th>
          <th>이메일</th>
          <th></th>
        </tr>
      </thead>
      {
        users.map((user) => {
          return (
            <tr>
              <User
                user={user}
                key={user.id}
                onRemove={onRemove}
                onToggle={onToggle}
                onModify={onModify}
              />
            </tr>
          );
        }) //2. User onToggle
      }
    </table>
  );
};
export default function UserModify() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [users, setUsers] = useState([
    // selected항목 추가 토글 속성
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
      selected: false,
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
      selected: false,
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
      selected: false,
    },
  ]);

  const { name, email } = inputs;
  const nextId = useRef(4);
  const onChange = (e) => {
    //객체 요소 수정

    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const user1 = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, user1]); //배열 복사하고 객체요소 추가

    nextId.current += 1;

    setInputs({
      name: "",
      email: "",
    });
  };

  const onRemove = (id) => {
    console.log("id " + id);
    const removeuser = users.filter((user) => user.id !== id); //배열에서 조건이 만족하는 원소를 추출하여 새배열생성
    setUsers(removeuser);
    // setUsers(users.filter(user => user.id !== id)); //****{}하지 말것
    setInputs({
      name: "",
      email: "",
    });
  };
  const onToggle = (id, user) => {
    //1)이름 클릭하면 selected속성 반전 2) input에 현재값 반영하기
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              selected: !user.selected,
            }
          : user
      )
    );
    setInputs({
      name: user.name,
      email: user.email,
    });
  };
  const onModify = (user, id) => {
    //1)수정 버튼 누르면 input의 값으로 user수정하기 2) input clear

    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              name: inputs.name,
              email: inputs.email,
            }
          : user
      )
    );
    setInputs({
      name: "",
      email: "",
    });
  };

  const countSelected = (users) => {
    return users.filter((user) => user.selected).length;
  };
  const sCount = countSelected(users);

  return (
    <div>
      {/* input의 name, email로 user객체 요소 렌더링, 컴포넌트에 수정,등록, 삭제 함수 전달 */}
      <UserInput
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* map함수로 출력하는 UserList 컴포넌트를 작성하고, onToggle,onModify함수도 전달하시오. */}
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onModify={onModify}
      />
      <p>선택된 사용자 수 : {sCount}</p>
    </div>
  );
}
