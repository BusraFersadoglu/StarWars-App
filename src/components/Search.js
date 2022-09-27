import {useState, useEffect} from 'react'
import Card from './Card'
import axios from 'axios';

function Search() {
  const [ships, setShips] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
     axios.get("https://swapi.dev/api/starships/")
     .then((res) => setShips(res.data.results));
   }, [])

   const searchItems = (e) => {
     setSearch(e.target.value);
     e.preventDefault();
   }

   let dataSearch = ships.filter((item) => {
      if(search === ""){
        return item;
      }
      else if (item.name.toLowerCase().includes(search.toLowerCase()) || 
              item.model.toLowerCase().includes(search.toLowerCase())){
        return item;
      }
   })

  return (
    <div className='search-container'>
    <form className='title'>
        <input name='shipsName' value={search} onChange={searchItems.bind(this)} />
        <div className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></div>
          
    </form>

    <div className='cards-container'>
    {
      dataSearch.map((ship, index) => (
      <Card 
        key={index}
        title={ship.name}
        model={ship.model}
        passengers={ship.passengers}
        hyperdrive_rating={ship.hyperdrive_rating}
        max_atmosphering_speed={ship.max_atmosphering_speed}
        manufacturer={ship.manufacturer}
        crew={ship.crew}
        cargo_capacity={ship.cargo_capacity}
      />
      ))
    }
    </div>
    </div>
  )
}

export default Search