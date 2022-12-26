import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);
  return (
    <header>
      <h1>Pokedex</h1>
      <h2>Hello, {nameTrainer}</h2>
    </header>
  );
};

export default Header;
