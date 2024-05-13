import { Link } from "react-router-dom";

function Nav(){
    return (
        <>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/pagination">Blog</Link>
          </nav>
        </>
    );
}

export default Nav;