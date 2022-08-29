import React from "react";
const Search = () => {
  return (
    <div className="search-container">
      <i className="fas fa-search search"></i>
      <input type="text" className="input" name="searchBox" placeholder="Pesquisar Produtos" />
    </div>
  );
}

export default Search;