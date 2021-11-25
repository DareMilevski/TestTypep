import { useState } from "react";

export default function LoggedIn() {
  const [isLoggdeIn, setisLoggdeIn] = useState(false);

  const handleLogin = () => {
    setisLoggdeIn(true);
  };
  const handleLogOut = () => {
    setisLoggdeIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggdeIn ? "logged in" : "logged out"}</div>
    </div>
  );
}
