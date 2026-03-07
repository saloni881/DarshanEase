import { useState } from "react";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    alert("Login Successful");
  };

  return (
    <div>

      <h2>Login</h2>

      <input
        className="form-control"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/>

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/>

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;