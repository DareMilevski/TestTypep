import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Dare",
      email: "milevski@pabau",
    });
  };
  const handleLogOut = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
}
