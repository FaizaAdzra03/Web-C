import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about_us")}>About Us</button>
        </li>

        <li>
          <button onClick={() => navigate("/contact_us")}>Contact</button>
        </li>
      </ul>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about_us">About</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
