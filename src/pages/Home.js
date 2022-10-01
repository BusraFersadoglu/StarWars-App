import {Link} from "react-router-dom";
import Logo from "../images/logo.png"

function Home() {
  return (
    <div className="home">
      <Link to={"/starships"}>
      <img src={Logo} alt="logo" className="home-img"/>
      </Link>
    </div>
  );
}

export default Home;
