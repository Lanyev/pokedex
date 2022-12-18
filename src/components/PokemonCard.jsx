import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setDataPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  const types = dataPokemon?.types.map((type) => type.type.name).join("/");

  return (
    <article className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
      <section
        className={`pokeCard__header bg-lg-${dataPokemon?.types[0].type.name}`}
      ></section>
      <section className="pokeCard__content">
        <img
          className="pokeCard__img"
          src={dataPokemon?.sprites.other["official-artwork"].front_default}
          alt="Pokemon Image"
        />
        <h3 className="pokeCard__name">{pokemon.name}</h3>
        <p className="pokeCard__types">{types}</p>
        <p className="pokeCard__types-title">Type</p>
        <hr />
        <section className="pokeCard__stats">
          {dataPokemon?.stats.map((stat) => (
            <div className="pokeCard__stat">
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
