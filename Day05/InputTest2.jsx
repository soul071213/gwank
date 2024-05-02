import { useState } from "react";
import "./style.css";
export default function InputTest2() {
  //객체 생성하기
  const inputs1 = {
    //100
    id: 0,
    name: "",
    email: "",
  };
  //2. useState이용하여 객체 반영하기
  const [inputs, setInputs] = useState(inputs1); //객체의 주소 100번지

  return (
    <div>
      <form action="">
        <h1> 로그인</h1>
        <li>
          이름
          <input
            type="text"
            onChange={(e) =>
              setInputs({
                ...inputs,
                name: e.target.value,
              })
            }
            value={inputs.name}
          />
        </li>
        <li>
          이메일
          <input
            type="email"
            onChange={(e) =>
              setInputs({
                ...inputs,
                email: e.target.value,
              })
            }
            value={inputs.email}
          />
        </li>
        <li>
          <button type="submit" action="">
            확인
          </button>
          <button
            onClick={() => setInputs({ ...user, id: 0, name: "", email: "" })}
          >
            취소
          </button>
        </li>
      </form>
      {inputs.name && <Modal inputs={inputs} />}
    </div>
  );
}

const Modal = ({ inputs }) => {
  return (
    <div id="modal">
      입력된 이름은 <span>{inputs.name}</span>이고 입력된 이메일은{" "}
      <span>{inputs.email}</span>
    </div>
  );
};
