import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";

const FormHome = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value.trim();
    dispatch(setNameTrainerGlobal(nameTrainer));
  };
  return (
    <form className="home__form" onSubmit={handleSubmit}>
      <input
        className="home__input"
        required
        typeof="text"
        placeholder="Your name here ..."
        id="nameTrainer"
      />
      <button className="home__btn">Start!</button>
    </form>
  );
};

export default FormHome;
