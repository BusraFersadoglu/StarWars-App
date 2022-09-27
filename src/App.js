import './App.css';
import Search from './components/Search';
import Home from './pages/Home';
import {Routes, Route, NavLink} from "react-router-dom"

function App() {
  return (
    <>
    <nav className='nav'>
      <NavLink to="/">Home</NavLink>
      <br></br>
      <NavLink to="/search">Star Ships</NavLink>
    </nav>
    <Routes className='app'>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Routes>
    </>
  );
}

export default App;
