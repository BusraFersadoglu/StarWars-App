import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";

//Import components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import StarshipsDetail from "./pages/StarshipsDetail";
import StarshipsList from "./components/StarshipsList";

function App() {
  const [ships, setShips] = useState([]);
  const [page, setPage] = useState(1);

  const [isNextPageButtonDisabled, setIsNextPageButtonDisabled] =
    useState(false);
  const [isPrevPageButtonDisabled, setIsPrevPageButtonDisabled] =
    useState(true);

  function fetchData({ type }) {
    axios.get(`https://swapi.dev/api/starships/?page=${page}`).then((res) => {
      setShips(res.data.results);

      if (type === "next") {
        if (res.data.next === null) {
          setIsNextPageButtonDisabled(true);
          setIsPrevPageButtonDisabled(false);
          return;
        }
        const nextPage = res.data.next.slice(-1);
        setPage(Number(nextPage));
      }

      if (type === "prev") {
        if (res.data.previous === null) {
          setIsNextPageButtonDisabled(false);
          setIsPrevPageButtonDisabled(true);
          return;
        }
        const prevPage = res.data.previous.slice(-1);
        setPage(Number(prevPage));
      }
    });
  }
  useEffect(() => {
    fetchData({ type: "next" });
  }, []);

  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/starships">Starships</NavLink>
      </nav>
      <Routes className="app">
        <Route path="/" element={<Home />} />
        <Route
          path="/starships"
          element={
            <StarshipsList
              fetchData={fetchData}
              ships={ships}
              isNextPageButtonDisabled={isNextPageButtonDisabled}
              isPrevPageButtonDisabled={isPrevPageButtonDisabled}
            />
          }
        />
        <Route
          path="/starships/:starshipName"
          element={<StarshipsDetail ships={ships} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
