import React from "react";
import { Link } from "react-router-dom";

const login = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="registro">
                    no tienes cuenta?, registrate ahora
                    <Link to="/registrarse">Registrate aqui</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default login;