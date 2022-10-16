import React from "react";
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/topstories">Top Stories</Link></li>
                    <li><Link to="/lateststories">Latest Stories</Link></li>
                    <li><Link to="/beststories">Best Stories</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Head;

