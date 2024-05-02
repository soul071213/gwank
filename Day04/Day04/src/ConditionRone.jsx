import {useState} from "react";
import "./style.css";

export default function ConditionRone(){
    const [login, setLogin]= useState(false); //암기
    return(
        <div>
            <div className="wrapp">
                {login && <span>환영합니다.</span>}
                {login ?
                <button className="btn" onClick={()=>setLogin(false)}>로그아웃</button> :
                <button className="btn" onClick={()=>setLogin(true)}>로그인</button>
                 }
                
            </div>
            <hr />
            <div style={{paddingTop: '8px'}}>모두함께 리액트 공부</div>
        </div>
    ); // 요소를 리턴
}
