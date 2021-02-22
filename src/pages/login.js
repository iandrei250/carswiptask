import React from "react";
import "../components/styles/login.css";

class Login extends React.Component {
  submit() {
    let userData = JSON.parse(sessionStorage.getItem("user"));

    if (userData && userData.authdata) {
      console.log("There is a user");
    } else console.log("Error");

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const user = { username, password };

    sessionStorage.setItem("user", user);
    document.getElementById("submit").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("password").disabled = true;
    alert("You are now logged in");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, pass: password }),
    };
    fetch("some-url-to-backend", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));

    console.log(requestOptions);
  }

  componentDidMount() {
    if (sessionStorage.getItem("user")) {
      document.getElementById("submit").disabled = true;
      document.getElementById("name").disabled = true;
      document.getElementById("password").disabled = true;
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="login-container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            id="name"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="password"
            required
          />
          <button id="submit" type="submit" onClick={() => this.submit()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

function LogIn() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default LogIn;
