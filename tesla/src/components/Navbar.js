import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link to={"/login"}>Iniciar sesion</Link>
        </div>
    );
}

export default Navbar;