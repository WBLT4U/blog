import { Link } from "react-router-dom";

function Nav(){
    return (
        <>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutus">Login</Link>
            <Link to="/contactus">Sign Up</Link>
            <Link to="/pagination">Blog</Link>
          </nav>
        </>
    );
}

export default Nav;
