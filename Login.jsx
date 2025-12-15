import { useState } from "react";

function Login({ setShowSignup, setUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="card animate-card">
      <h2 className="animated-text">Welcome Back</h2>

      <div className="input-group">
        <input type="email" required onChange={(e) => setEmail(e.target.value)} />
        <label>Email</label>
      </div>

      <div className="input-group">
        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label>
      </div>

      <button onClick={handleLogin}>Login</button>

      <p className="switch" onClick={() => setShowSignup(true)}>
        Don't have an account? <span>Signup</span>
      </p>
    </div>
  );
}

export default Login;
