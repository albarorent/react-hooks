import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(counter);

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {isLoading ? <LoadingMessage /> : <PokemonCard {...data} />}

      <button onClick={() => (counter > 1 ? decrement() : null)}>
        Anterior
      </button>
      <button onClick={() => increment()}>Siguiente</button>
    </>
  );
};
