import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2>
        #{id} - {name}
      </h2>
      {/* Images */}
      <div>
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.front_default} alt={name} />
      </div>
    </section>
  );
};
