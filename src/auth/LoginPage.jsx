import React, { useState } from "react";
import { signIn, signUp } from "../apiService/apiService";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = (e) => {
    e.preventDefault();
    signIn(password, email);
  };
  const handleClickSignUp = (e) => {
    e.preventDefault();
    signUp(password, email);
  };
  return (
    <form>
      <div className="input_wrapper">
        <label>
          Почта
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div className="input_wrapper">
        <label>
          Пароль
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div className="input_buttons">
        <button onClick={handleClickSignIn}>Войти</button>
        <button onClick={handleClickSignUp}>Зарегестрироваться</button>
      </div>
    </form>
  );
};

export default LoginPage;
