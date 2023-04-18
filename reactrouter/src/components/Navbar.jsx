import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <nav>
        <Link to="/">Home</Link>
        <LInk to="/contact">Contaos</LInk>
       </nav>
    );
};

export default Navbar;
