import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let temp = [];
    if (searchTerm !== "") {
      const results = props.products.filter((p) => {
        return p.prod.toLowerCase().includes(searchTerm.toLowerCase());
      });
      temp = results.map((p) => {
        return p.prod;
      });
      setNames(temp);
    } else {
      setNames([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <form
        className="form-inline active-cyan-3 active-cyan-4"
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          name="search"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          style={{ display: "block" }}
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        {names.map((item) => (
          <li className="searchItems">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
