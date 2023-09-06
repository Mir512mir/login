import React, { useState } from "react";

const FormComponent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

const handleSubmit = () => {
    console.log("Login:", login);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

const validatePassword = () => {
    // Проверка на соответствие пароля с потверждением
    return password === confirmPassword;
  };

const validateLogin = () => {
    // Проверка на правильность введенной почты
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(login);
  };

return (
    <div>
      <input type="text" placeholder="Login (email)" value={login} onChange={handleLoginChange} />
      {login && !validateLogin() && <span style={{ color: "red" }}>Invalid email format</span>}
      <br />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <br />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      {!validatePassword() && <span style={{ color: "red" }}>Passwords do not match</span>}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;