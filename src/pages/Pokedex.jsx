import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListPokemons from "../components/ListPokemons";
import PokemonSearch from "../components/PokemonSearch";
import "../styles/Pokedex.css";
import "boxicons";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
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
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      });
  }, [currentPage]);

  return (
    <main>
      <header className="header__pokedex">
        <h1 className="poke__name">Pokedex</h1>
        <p className="poke__welcome">
          Welcome
          <span className="poke__trainer"> {nameTrainer}</span>, here are all
          the pokemons you can catch!
        </p>
      </header>
      {/* <PokemonSearch updatePokemons={updatePokemons} /> */}
      <ListPokemons pokemons={pokemons} />
      {errorMessage && <p>{errorMessage}</p>}
      <div className="btn__section">
        {currentPage > 1 && (
          <button className="btn__prev" onClick={handlePrevPage}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
        )}
        {currentPage === 1 && <p></p>}
        <button className="btn__top">
          <i className="bx bx-up-arrow-alt"></i>
        </button>
        {currentPage < totalPages && (
          <button className="btn__next" onClick={handleNextPage}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        )}
        {currentPage === totalPages && (
          <p>You are on the last page, there is no next page</p>
        )}
      </div>
    </main>
  );
};

export default Pokedex;
