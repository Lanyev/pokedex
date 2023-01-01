import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Header.css";
import ModalFilter from "../components/ModalFilter";

const Header = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const [types, setTypes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(!showModal);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="pokedex__header">
      <h1 className="pokedex__header-title">Pokedex</h1>
      <h2 className="pokedex__header-nameTrainer">Hello {nameTrainer}</h2>
      <h3 className="pokedex__header-phrase">
        Here are all the Pokemons you can capture.
      </h3>
      <div className="pokedex__header-form">
        <button className="showFilter" onClick={handleShowModal}>
          🔍
        </button>
        {showModal && <ModalFilter types={types} />}
      </div>
    </header>
  );
};

export default Header;
