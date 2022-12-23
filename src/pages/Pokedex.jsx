import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListPokemons from "../components/ListPokemons";
import PokemonSearch from "../components/PokemonSearch";
import "../styles/Pokedex.css";
import Pagination from "../components/Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemonFilter, setPokemonsFilter] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(20);

  const nameTrainer = useSelector((state) => state.nameTrainer);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios
      .get(URL)
      .then((res) => {
        setPokemons(res.data.results);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      });
  };

  useEffect(() => {
    const newPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(namePokemon)
    );
    setPokemonsFilter(newPokemons);
  }, [namePokemon]);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${
      (currentPage - 1) * resultsPerPage
    }&limit=${resultsPerPage}`;
    axios
      .get(URL)
      .then((res) => {
        setPokemons(res.data.results);
        setTotalPages(Math.ceil(res.data.count / resultsPerPage));
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      });
  }, [currentPage, resultsPerPage]);

  //useEffect para traer los pokemons buscados por nombre
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios
      .get(URL)
      .then((res) => {
        setPokemons(res.data.results);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      });
  }, [name]);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type`;
    axios
      .get(URL)
      .then((res) => {
        setTypes(res.data.results);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred while fetching the pokemons");
        console.log(error);
      });
  }, []);

  return (
    <main>
      <header className="header__pokedex">
        <h1 className="poke__name">Pokedex</h1>
        <p className="poke__welcome">
          Welcome
          <span className="poke__trainer"> {nameTrainer}</span>, here are all
          the pokemons you can catch!
        </p>
        <form onSubmit={handleSubmit} className="pokedex__form">
          <div className="pokedex__search">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn__search">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>
      </header>

      <ListPokemons pokemons={pokemons} />
      {errorMessage && <p>{errorMessage}</p>}
      <Pagination
        resultsPerPage={resultsPerPage}
        totalPokemons={totalPages}
        paginate={handlePageChange}
      />
      <div className="pagination__container">
        {currentPage > 1 && (
          <button className="pagination__button" onClick={handlePrevPage}>
            Previous
          </button>
        )}
        {pageNumbers.map((number) => (
          <button
            key={number}
            className="pagination__button"
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && (
          <button className="pagination__button" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </main>
  );
};

export default Pokedex;
