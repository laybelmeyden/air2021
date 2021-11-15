import React from "react";
import { NavLink } from "react-router-dom";



const ExpertsLink = () => {
    return (
        <div className="item__link">
            <NavLink exact to="/experts">
                <div>
                    <p>Эксперты</p>
                </div>
            </NavLink>
            <NavLink to="/experts/books">
                <div>
                    <p>Методические пособия и книги</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ExpertsLink;
