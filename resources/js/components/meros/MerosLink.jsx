import React from "react";
import { NavLink } from "react-router-dom";



const MerosLink = () => {
    return (
        <div className="item__link">
            <NavLink exact to="/events">
                <div>
                    <p>Текущие мероприятия</p>
                </div>
            </NavLink>
            <NavLink to="/events/finished">
                <div>
                    <p>Прошедшие мероприятия</p>
                </div>
            </NavLink>
        </div>
    );
};

export default MerosLink;
