import { useState } from "react";

export const useForm = (initialForm = {}): object => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }):void => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const onResetForm = () => {
    setFormState(initialForm);
  };
 
  return {
    ...formState,
    onInputChange,
    onResetForm
  };
};
