import { memo } from "react";

export const ShowIncrement = memo(({ incrementar }) => {
  console.log("Me volvi a renderizar");
  return (
    <button
      onClick={() => {
        incrementar(5);
      }}
    >
      Incrementar
    </button>
  );
});
