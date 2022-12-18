import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const nameTrainer = useSelector((state) => state.nameTrainer);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1154";
    axios
      .get(URL)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <header>
        <h1>Pokedex</h1>
        <p>
          Welcome
          <span>{nameTrainer}</span>, here is your pokedex.
        </p>
      </header>
    </main>
  );
};

export default Pokedex;
