import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const {counter, decrement, increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(counter);

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {isLoading ? <LoadingMessage/> : <PokemonCard {...data} />}

      <button onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
      <button onClick={()=> increment()}>Siguiente</button>
    </>
  );
};
