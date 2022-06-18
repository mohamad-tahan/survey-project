import React, { useState } from "react";
console.log("Login Page");

async function loginUser(credentials) {

  return fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    if ("access_token" in response) {
      try {
        alert("Success");
        
        
        localStorage.setItem("access_token", response["access_token"]);
        localStorage.setItem("token_type", JSON.stringify(response['token_type']));
        window.location.href = "/addSurvey";
      } catch {
        alert("Failed");
        console.log(response);
      }
    } else {
      alert("You are not Authorized");
    }
  };

  return (
    <div className="loginBox" id="loginBox">
      <h2 className="title">LOG IN</h2>
      <form name="login" onSubmit={handleSubmit}>
        <div className="inputBox">
          <label>Email</label>
          <input
            id="email"
            type="text"
            required="required"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            id="password"
            type="password"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="log" value="Login" id="login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
