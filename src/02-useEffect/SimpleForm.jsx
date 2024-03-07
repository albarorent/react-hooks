import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({username:'strider', email:'strider@google.com'})
    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("cambios");
    }, [])
    

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input type="text" name="username" placeholder="Username" onChange={onInputChange} value={username} />
      <input type="email" name="email" placeholder="alvaro@google.com" onChange={onInputChange} value={email} />

      {
        (username === 'strider') && <Message/>

      }
    </>
  );
};
