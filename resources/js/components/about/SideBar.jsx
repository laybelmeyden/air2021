import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="side__bar__comp">
            <NavLink exact to="/about">
                <div>
                    <p>ОБ АГЕНТСТВЕ</p>
                </div>
            </NavLink>
            <NavLink to="/about/geografy">
                <div>
                    <p>География мероприятий</p>
                </div>
            </NavLink>
            <NavLink to="/about/document">
                <div>
                    <p>Документы</p>
                </div>
            </NavLink>
            <NavLink to="/about/cooperation">
                <div>
                    <p>Сотрудничество</p>
                </div>
            </NavLink>
            <NavLink to="/about/teams">
                <div>
                    <p>Наша команда</p>
                </div>
            </NavLink>
            <NavLink to="/about/contact">
                <div>
                    <p>Контакты</p>
                </div>
            </NavLink>
        </div>
    );
};

export default SideBar;
