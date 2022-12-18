import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListPokemons from "../components/ListPokemons";
import "../styles/Pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const nameTrainer = useSelector((state) => state.nameTrainer);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=44";
    axios
      .get(URL)
      .then((res) => setPokemons(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <header className="header__pokedex">
        <h1 className="poke__name">Pokedex</h1>
        <p className="poke__welcome">
          Welcome
          <span className="poke__trainer"> {nameTrainer}</span>, here is your
          pokedex.
        </p>
      </header>
      <ListPokemons pokemons={pokemons} />
    </main>
  );
};

export default Pokedex;
