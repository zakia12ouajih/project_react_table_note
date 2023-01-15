import React from "react";
import { Link } from "react-router-dom";
import '../style/App.css';

export default function Menu(){
    return(
        <div className="div">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/update/1">update</Link></li>
            </ul>
        </div>
    )
}