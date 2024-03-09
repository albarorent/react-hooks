import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
   const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({width, height})

  }, [sprites]);
  return (
   <>
    <section style={{height:200}}>
      <h2>
        #{id} - {name}
      </h2>
      {/* Images */}
      <div ref={pRef}>
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.front_default} alt={name} />
      </div>
    </section>
    <code>{JSON.stringify(boxSize)}</code>
   </>
  );
};
