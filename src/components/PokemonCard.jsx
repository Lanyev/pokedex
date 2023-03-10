import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState();

  const navigate = useNavigate();

  const types = dataPokemon?.types.map((type) => type.type.name).join("/");

  const handleClickPokemon = () => {
    navigate(`/pokemon/${dataPokemon?.id}`);
  };

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setDataPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <article
      onClick={handleClickPokemon}
      className={`pokeCard border-${dataPokemon?.types[0].type.name}`}
    >
      <section
        className={`pokeCard__header bg-lg-${dataPokemon?.types[0].type.name}`}
      ></section>
      <section className="pokeCard__content">
        <img
          className="pokeCard__img"
          src={dataPokemon?.sprites.front_default}
          alt={pokemon.name}
        />
        <h3 className="pokeCard__name">{pokemon.name}</h3>
        <p className="pokeCard__types">{types}</p>
        <p className="pokeCard__types-title">Type</p>
        <hr />
        <section className="pokeCard__stats">
          {dataPokemon?.stats.map((stat, index) => (
            <div className="pokeCard__stat" key={index}>
              <p className="pokeCard__stat-name">{stat.stat.name}</p>
              <p className="pokeCard__stat-value">{stat.base_stat}</p>
            </div>
          ))}
        </section>
      </section>
    </article>
  );
};

export default PokemonCard;
