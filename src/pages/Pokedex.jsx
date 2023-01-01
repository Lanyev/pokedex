import axios from "axios";
import React, { useEffect, useState } from "react";
import ListPokemons from "../components/ListPokemons";
import "../styles/Pokedex.css";
import Header from "../layout/Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("");
  const [pokemonFilter, setPokemonsFilter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.namePokemon.value;
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await axios.get(URL);
        setPokemons(response.data.results);
      } catch (error) {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      }
    };

    fetchPokemons();
  }, [name]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(name)
    );
    setPokemonsFilter(newPokemons);
  }, [name, pokemons]);

  return (
    <div className="pokedex">
      <Header />
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        <ListPokemons
          pokemons={pokemonFilter.length > 0 ? pokemonFilter : pokemons}
          types={types}
        />
      )}
    </div>
  );
};

export default Pokedex;
