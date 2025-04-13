import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  //Sorting the countries
  const sortCountries = (value) => {
    const sortedCountries = [...countries].sort((a, b) => {
      if (value === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setCountries(sortedCountries);
  };

  return (
    <section className="section-searchFilter container">
      <div className="searchFilter-container">
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
            autoFocus="true"
          />
        </div>
        <div className=" right-container">
          <div className="sort-container">
            <div>
              <button onClick={() => sortCountries("asc")}> Asc</button>
            </div>
            <div>
              <button onClick={() => sortCountries("desc")}> Desc</button>
            </div>
          </div>
          <div>
            <select
              className="select-section"
              value={filter}
              onChange={handleSelectChange}
              autoFocus="true"
            >
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
