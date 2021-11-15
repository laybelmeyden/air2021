import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const [navOpen, setNavOpen] = React.useState(false);
    const onNavClose = (e) => {
        window.innerWidth >= 1180 ? setNavOpen(false) : setNavOpen(!navOpen);
    };
    return (
        <div className="side__bar__comp">
            <div className="side__bar__mobile">
                <div className={`nav__mobile ${navOpen && "show__nav__mobile"}`}  onClick={() => setNavOpen(!navOpen)}>
                    <div className="hamburger__menu">
                        <div
                            className={`item ${navOpen ? "item__rotate" : ""}`}
                        ></div>
                    </div>
                    <p>Меню</p>
                </div>
            </div>
            <div className={`side__bar__item__href ${navOpen && "show__sidebar"}`}>
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
        </div>
    );
};

export default SideBar;
