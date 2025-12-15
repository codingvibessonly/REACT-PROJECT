import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [showSignup, setShowSignup] = useState(true);
  const [userData, setUserData] = useState(null);

  return (
    <div className="container">
      {showSignup ? (
        <Signup setShowSignup={setShowSignup} setUserData={setUserData} />
      ) : (
        <Login setShowSignup={setShowSignup} setUserData={userData} />
      )}
    </div>
  );
}

export default App;
