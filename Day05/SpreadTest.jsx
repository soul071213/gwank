import { useState } from "react";
export default function InputTest1() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")

  return (
    <div>
      <form action="">
        <h1> 로그인</h1>
        <li>
          이름
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </li>
        <li>
          이메일
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </li>
        <li>
          <button type="submit" action="">
            확인{" "}
          </button>
          <button>취소</button>``
        </li>
      </form>
      <div id="modal">
        입력된 이름은 <span>{name}</span>이고 입력된 이메일은 <span>{email}</span>
      </div>
    </div>
  );
}
