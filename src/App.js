import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Home from './pages/Home';
import StarshipsDetail from './pages/StarshipsDetail';
import StarshipsList from './components/StarshipsList';
import {Routes, Route, NavLink} from "react-router-dom"

function App() {
  const [ships, setShips] = useState([]);


  function fetchStarships() {
    axios.get("https://swapi.dev/api/starships/")
    .then((res) => setShips(res.data.results));
  }
  useEffect(() => {
    fetchStarships();
   }, [])

  return (
    <>
    <nav className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/starships">Starships</NavLink>
    </nav>
    <Routes className='app'>
      <Route path='/' element={<Home />} />
      <Route path='/starships' element={<StarshipsList ships={ships}/>} />
      <Route path='/starships/:starshipName' element={<StarshipsDetail ships={ships}/>} />
    </Routes>
    </>
  );
}

export default App;
