import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <h1>Bienvenido <small>{user?.name}</small></h1>
    </>
  );
};
