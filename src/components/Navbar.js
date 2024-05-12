import { Link } from "react-router-dom";

function Nav(){
    return (
        <>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/pagination">Blog</Link>
          </nav>
        </>
    );
}

export default Nav;