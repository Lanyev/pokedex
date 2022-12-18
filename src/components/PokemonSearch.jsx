import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const DEBOUNCE_DELAY = 500;

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const PokemonSearch = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, DEBOUNCE_DELAY);

  useEffect(() => {
    if (debouncedSearch) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${debouncedSearch}`)
        .then((response) => {
          setPokemonList(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setPokemonList([]);
    }
  }, [debouncedSearch]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSelect = (pokemon) => {
    setSearch(pokemon.name);
    setPokemonList([]);
  };

  return (
    <form>
      <label htmlFor="pokemonName">Nombre del Pokémon:</label>
      <input
        id="pokemonName"
        type="text"
        onChange={handleSearch}
        value={search}
      />
      {pokemonList && pokemonList.length > 0 && (
        <select onChange={handleSelect} value={search}>
          {pokemonList.map((pokemon) => (
            <option value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
      )}
    </form>
  );
};

export default PokemonSearch;
