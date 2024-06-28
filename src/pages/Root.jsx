import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Root() {


    return (
        <div>
            <nav>
                <ul className="nav">
                    <li><Link to='/'>Todos</Link></li>
                    <li><Link to='/favorites'>Favoritos</Link></li>
                </ul>
            </nav>
            <div className="line"></div>
        </div >

    );

}

export default Root;