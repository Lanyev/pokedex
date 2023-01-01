import React from "react";

const ModalFilter = ({ types = [], handleSubmit }) => {
  return (
    <form className="modal__header" onSubmit={handleSubmit} action="submit">
      <input
        className="modal__input"
        type="text"
        placeholder="Search a pokemon"
        id="namePokemon"
      />
      <button className="modal__searchBtn" type="submit">
        Search
      </button>
      <select className="pokedex__header-select">
        <option value="">All</option>
        {types.map((type) => (
          <option value={type.name} key={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default ModalFilter;
