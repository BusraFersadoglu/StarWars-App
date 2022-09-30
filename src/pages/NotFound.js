import {Link} from "react-router-dom";
import Logo from "../logo.png";

function NotFound() {
  return (
    <div className="page-not-found" >
        <h1>Page Not Found</h1>
        <Link to={"/"}>
            <img src={Logo} alt="logo" className="not-found-img"/>
      </Link>
    </div>
  )
}

export default NotFound