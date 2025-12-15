import { useState } from "react";

function Signup({ setShowSignup, setUserData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    const user = { name, email, password };
    setUserData(user);
    alert("Signup Successful! Now Login");
    setShowSignup(false);
  };

  return (
    <div className="card animate-card">
      <h2 className="animated-text">Create Your Account</h2>

      <div className="input-group">
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <label>Full Name</label>
      </div>

      <div className="input-group">
        <input type="email" required onChange={(e) => setEmail(e.target.value)} />
        <label>Email</label>
      </div>

      <div className="input-group">
        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label>
      </div>

      <button onClick={handleSignup}>Signup</button>

      <p className="switch" onClick={() => setShowSignup(false)}>
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}

export default Signup;
