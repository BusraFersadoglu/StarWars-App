import { useState } from "react";
import Starships from "./Starships";
import Button from "./Button";

function StarshipsList({
  ships,
  fetchData,
  isNextPageButtonDisabled,
  isPrevPageButtonDisabled,
}) {
  const [search, setSearch] = useState("");

  const searchItems = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };

  let dataSearch = ships.filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div className="search-container">
      <form className="form">
        <input
          name="shipsName"
          value={search}
          onChange={searchItems.bind(this)}
        />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </form>

      <Button
        fetchData={fetchData}
        isPrevPageButtonDisabled={isPrevPageButtonDisabled}
        isNextPageButtonDisabled={isNextPageButtonDisabled}
      />

      <div className="cards-container">
        {dataSearch.map((ship, index) => (
          <Starships key={index} ship={ship} />
        ))}
      </div>
    </div>
  );
}

export default StarshipsList;
