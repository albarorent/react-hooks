import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <ul>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
      </ul>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Alvaro", email: "alvaro@gmail.com" })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
