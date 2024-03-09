import { useCallback } from "react";
import { useCounter } from "../hooks";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const { counter, setCounter } = useCounter(10);
  const incrementarFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallback: {counter}</h1>
      <hr />
      <ShowIncrement incrementar={incrementarFather} />
    </>
  );
};
