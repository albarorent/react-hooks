import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={onInputChange}
        value={username}
      />
      <input
        type="email"
        name="email"
        placeholder="alvaro@google.com"
        onChange={onInputChange}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="contraseña"
        onChange={onInputChange}
        value={password}
      />

      <button onClick={onResetForm}>Borrar</button>
    </>
  );
};
