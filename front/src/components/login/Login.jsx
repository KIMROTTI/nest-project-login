import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  //input data의 변화마다 value 값을 변경해서 useState해준다.
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  //login 버튼 클릭시 이벤트
  const onClickLogin = (id, password) => {
    console.log("click login");
    console.log(id, password);
    axios
      .post("http://localhost:3001/auth/login", {
        username: id,
        password: password,
      })
      .then(function (response) {
        // response
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };
  //페이지 렌더링 후 가장 처음 호출되는 함수
  // useEffect(() => {

  // })
  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        {/* <label id="label_id" htmlFor="input_id">
          ID :{" "}
        </label> */}
        <input
          id="id"
          type="text"
          name="input_id"
          placeholder="Login ID"
          value={inputId}
          onChange={handleInputId}
        ></input>
      </div>
      <div>
        {/* <label id="label_pw" htmlFor="input_pw">
          PW :{" "}
        </label> */}
        <input
          id="pw"
          type="password"
          name="input_pw"
          placeholder="Login PassWord"
          value={inputPw}
          onChange={handleInputPw}
        ></input>
      </div>
      <div>
        <input
          type="submit"
          value="로그인"
          onClick={() => onClickLogin(inputId, inputPw)}
        ></input>
      </div>
      <div>
        <span>Login ID가 없으십니까? </span>
        <a>지금 만드세요.</a>
      </div>
    </div>
  );
}
