import { useState } from "react";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = () => {
    alert("Registration Successful");
  };

  return (
    <div>

      <h2>Register</h2>

      <input
        className="form-control"
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br/>

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
        className="btn btn-success"
        onClick={handleRegister}
      >
        Register
      </button>

    </div>
  );
}

export default Register;