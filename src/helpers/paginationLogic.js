import { current } from "@reduxjs/toolkit";

export const paginationLogic = (currentPage, pokemonFilter) => {
  // Cantidad de pokemones por pagina
  const pokemonPerPage = 12;

  // Slice de pokemones por pagina
  const sliceStart = (currentPage - 1) * pokemonPerPage;
  const sliceEnd = currentPage * pokemonPerPage;
  const pokemonInPage = pokemonFilter.slice(sliceStart, sliceEnd);

  // Ultima pagina
  const lastPage = Math.ceil(pokemonFilter.length / pokemonPerPage);

  // Bloque actual
  const pagesPerBlock = 5;
  const currentBlock = Math.ceil(currentPage / pagesPerBlock);

  // Paginas por bloque
  const pagesInBlock = [];
  const minPage = currentBlock * pagesPerBlock - pagesPerBlock + 1;
  const maxPage = currentBlock * pagesPerBlock;
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesInBlock.push(i);
    }
  }

  return { pagesInBlock, lastPage, pokemonInPage };
};
