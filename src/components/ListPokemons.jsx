import React from "react";
import PokemonCard from "./PokemonCard";
import "../styles/ListPokemons.css";

const ListPokemons = ({ pokemons }) => {
  return (
    <ul className="pokemon__list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default ListPokemons;
