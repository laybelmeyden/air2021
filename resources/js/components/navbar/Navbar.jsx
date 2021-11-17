import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const onNavClose = (e) =>{
        window.innerWidth >= 1180
            ? setNavOpen(false)
            : setNavOpen(!navOpen);
    }
    return (
        <nav>
            <div className="nav__item">
                <div className="container">
                    <div className="nav__info">
                        <div className="logo__item">
                            <NavLink to="/">
                                <img
                                    src="/assets/img/airlogo.svg"
                                    alt="airlogo"
                                />
                            </NavLink>
                        </div>
                        <div className="title__item">
                            <h1>
                                Социально-ориентированная некоммерческая
                                организация, реализующая
                                научно-исследовательские проекты в сфере IT,
                                мероприятия, направленные на популяризацию
                                научно-технического творчества в сфере цифровых
                                технологий, образовательные проекты.
                            </h1>
                        </div>
                        <div className="search__item">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.68756 10.8594C8.34543 10.8594 10.5001 8.70475 10.5001 6.04688C10.5001 3.389 8.34543 1.23438 5.68756 1.23438C3.02969 1.23438 0.875061 3.389 0.875061 6.04688C0.875061 8.70475 3.02969 10.8594 5.68756 10.8594ZM11.3751 6.04688C11.3751 9.18799 8.82868 11.7344 5.68756 11.7344C2.54644 11.7344 6.10352e-05 9.18799 6.10352e-05 6.04688C6.10352e-05 2.90576 2.54644 0.359375 5.68756 0.359375C8.82868 0.359375 11.3751 2.90576 11.3751 6.04688Z"
                                    fill="#A0AEC0"
                                />
                                <path
                                    d="M9.05096 10.6338C9.07677 10.6688 9.10551 10.7023 9.13719 10.7339L12.5063 14.1031C12.8481 14.4448 13.4021 14.4448 13.7438 14.1031C14.0855 13.7614 14.0855 13.2074 13.7438 12.8657L10.3746 9.4965C10.3429 9.46482 10.3094 9.43608 10.2745 9.41028C9.93121 9.87759 9.51827 10.2905 9.05096 10.6338Z"
                                    fill="#A0AEC0"
                                />
                            </svg>
                            <input type="search" placeholder="Поиск" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={`nav__links ${navOpen && "longer"}`}>
                    <div
                        className="item__nav__mobile"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <div className="nav__mobile">
                            <div className="hamburger__menu">
                                <div
                                    className={`item ${
                                        navOpen ? "item__rotate" : ""
                                    }`}
                                ></div>
                            </div>
                            <p>Меню</p>
                        </div>
                    </div>
                    <div className={`nav__href ${navOpen && "show"}`}>
                        <div>
                            <NavLink to="/about" onClick={onNavClose}>об агентстве</NavLink>
                        </div>
                        <div>
                            <NavLink to="/projects" onClick={onNavClose}>ПРОЕКТЫ</NavLink>
                        </div>
                        <div>
                            <NavLink to="/news" onClick={onNavClose}>НОВости</NavLink>
                        </div>
                        <div>
                            <NavLink to="/events" onClick={onNavClose}>Меропрития</NavLink>
                        </div>
                        <div>
                            <NavLink to="/experts" onClick={onNavClose}>
                                Экспертно-методический блок
                            </NavLink>
                        </div>
                        {/* <div><NavLink to="2">галерея</NavLink></div> */}
                        <div>
                            <NavLink to="/contact" onClick={onNavClose}>контакты</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
