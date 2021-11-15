import React from "react";
import { NavLink } from "react-router-dom";

const DocumentLink = () => {
    return (
        <div className="item__link">
            <NavLink exact to="/about/document">
                <div>
                    <p>Уставные документы</p>
                </div>
            </NavLink>
            <NavLink to="/about/document/other">
                <div>
                    <p>Отчеты и прочие документы</p>
                </div>
            </NavLink>
        </div>
    );
};

export default DocumentLink;
