import React from 'react';
import { Link } from "react-router-dom";


const HomePage = () =>{
    return(
        <div className="container-fluid">
            <div>HomePage</div>
            <Link className="btn btn-dark" to="/about">
                Learn More 
            </Link>

        </div>
    );
}


export default HomePage;