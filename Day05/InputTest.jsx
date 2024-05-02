/*InputTest1.jsx */
import { useState } from "react";
import "./style.css";
const Modal = (props) => {
  const { name, nickname, email } = props; //객체 구조분해 할당
  <div id="modal">
    입력된 이름은 <span>{name}</span>이고, 닉네임은 <span>{nickname}</span>{" "}
    입력된 이메일은 <span>{email}</span>
  </div>;
};
export default function InputTest2() {
  //객체 생성하기

  //2. useState이용하여 객체 반영하기
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    email: "",
  }); //객체의 주소 100번지
  const [name, nickname, email] = inputs;

  return (
    <div>
      <form action="">
        <h1> 로그인</h1>
        <li>
          이름
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) =>
              setUser({
                ...user,
                [e.target.name]: e.target.value,
              })
            }
          />
        </li>
        <li>
          이메일
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                [e.target.email]: e.target.value,
              })
            }
          />
        </li>
        <li>
          <button type="submit" action="">
            확인{" "}
          </button>
          <button
            onClick={() => setUser({ ...user, id: 0, name: "", email: "" })}
          >
            취소
          </button>
        </li>
      </form>
    </div>
  );
}
