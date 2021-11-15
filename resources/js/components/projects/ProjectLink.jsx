import React from "react";
import { NavLink } from "react-router-dom";



const ProjectLink = () => {
    return (
        <div className="item__link">
            <NavLink exact to="/projects">
                <div>
                    <p>Текущие проекты</p>
                </div>
            </NavLink>
            <NavLink to="/projects/finished">
                <div>
                    <p>Реализованные проекты</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ProjectLink;
