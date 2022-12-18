import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListPokemons from "../components/ListPokemons";
import PokemonSearch from "../components/PokemonSearch";
import "../styles/Pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const updatePokemons = (pokemon) => {
    setPokemons([pokemon]);
  };
  const nameTrainer = useSelector((state) => state.nameTrainer);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${
      (currentPage - 1) * 20
    }&limit=20`;
    axios
      .get(URL)
      .then((res) => {
        setPokemons(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 20));
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

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
      {/* <PokemonSearch updatePokemons={updatePokemons} /> */}
      <ListPokemons pokemons={pokemons} />
      <div className="btn__section">
        <button className="btn__prev" onClick={handlePrevPage}>
          Previous
        </button>
        <button className="btn__top">To Top</button>
        <button className="btn__next" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </main>
  );
};

export default Pokedex;
