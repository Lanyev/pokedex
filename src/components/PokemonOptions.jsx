import React from "react";

const PokemonOptions = ({ pokemonList, handleSelect }) => {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li onClick={() => handleSelect(pokemon)}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonOptions;
