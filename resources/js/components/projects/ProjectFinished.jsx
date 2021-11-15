import React from "react";
import ProjectLink from "./ProjectLink";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const ProjectFinished = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container item__projects">
                <Helmet>
                    <title>АИР - Реализованные проекты</title>
                    <meta name="description" content="Реализованные проекты" />
                </Helmet>
                <div>
                    <ProjectLink />
                </div>
                <div className="project__grid">
                    <Link>
                        <div className="card__project">
                            <div
                                className="item__img"
                                style={{
                                    backgroundImage:
                                        "url(./../assets/img/projectimg.png)",
                                }}
                            ></div>
                            <div className="item__desc">
                                <img
                                    src="/assets/img/projects1.svg"
                                    alt="projects1"
                                />
                                <p className="title">
                                    Всероссийская программа «IT Start»22
                                </p>
                                <p className="desc">
                                    Всероссийская программа поддержки
                                    научно-технического творчества молодежи в
                                    сфере информационных технологий «IT Start»
                                    реализуется с 2012 года.
                                </p>
                                <button>
                                    Подробнее
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.90403 1.02903C3.02607 0.90699 3.22393 0.90699 3.34597 1.02903L7.09597 4.77903C7.21801 4.90107 7.21801 5.09893 7.09597 5.22097L3.34597 8.97097C3.22393 9.09301 3.02607 9.09301 2.90403 8.97097C2.78199 8.84893 2.78199 8.65107 2.90403 8.52903L6.43306 5L2.90403 1.47097C2.78199 1.34893 2.78199 1.15107 2.90403 1.02903Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card__project">
                            <div
                                className="item__img"
                                style={{
                                    backgroundImage:
                                        "url(./../assets/img/projectimg.png)",
                                }}
                            ></div>
                            <div className="item__desc">
                                <img
                                    src="/assets/img/projects1.svg"
                                    alt="projects1"
                                />
                                <p className="title">
                                    Всероссийская программа «IT Start»
                                </p>
                                <p className="desc">
                                    Всероссийская программа поддержки
                                    научно-технического творчества молодежи в
                                    сфере информационных технологий «IT Start»
                                    реализуется с 2012 года.
                                </p>
                                <button>
                                    Подробнее
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.90403 1.02903C3.02607 0.90699 3.22393 0.90699 3.34597 1.02903L7.09597 4.77903C7.21801 4.90107 7.21801 5.09893 7.09597 5.22097L3.34597 8.97097C3.22393 9.09301 3.02607 9.09301 2.90403 8.97097C2.78199 8.84893 2.78199 8.65107 2.90403 8.52903L6.43306 5L2.90403 1.47097C2.78199 1.34893 2.78199 1.15107 2.90403 1.02903Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card__project">
                            <div
                                className="item__img"
                                style={{
                                    backgroundImage:
                                        "url(./../assets/img/projectimg.png)",
                                }}
                            ></div>
                            <div className="item__desc">
                                <img
                                    src="/assets/img/projects1.svg"
                                    alt="projects1"
                                />
                                <p className="title">
                                    Всероссийская программа «IT Start»
                                </p>
                                <p className="desc">
                                    Всероссийская программа поддержки
                                    научно-технического творчества молодежи в
                                    сфере информационных технологий «IT Start»
                                    реализуется с 2012 года.
                                </p>
                                <button>
                                    Подробнее
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.90403 1.02903C3.02607 0.90699 3.22393 0.90699 3.34597 1.02903L7.09597 4.77903C7.21801 4.90107 7.21801 5.09893 7.09597 5.22097L3.34597 8.97097C3.22393 9.09301 3.02607 9.09301 2.90403 8.97097C2.78199 8.84893 2.78199 8.65107 2.90403 8.52903L6.43306 5L2.90403 1.47097C2.78199 1.34893 2.78199 1.15107 2.90403 1.02903Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card__project">
                            <div
                                className="item__img"
                                style={{
                                    backgroundImage:
                                        "url(./../assets/img/projectimg.png)",
                                }}
                            ></div>
                            <div className="item__desc">
                                <img
                                    src="/assets/img/projects1.svg"
                                    alt="projects1"
                                />
                                <p className="title">
                                    Всероссийская программа «IT Start»
                                </p>
                                <p className="desc">
                                    Всероссийская программа поддержки
                                    научно-технического творчества молодежи в
                                    сфере информационных технологий «IT Start»
                                    реализуется с 2012 года.
                                </p>
                                <button>
                                    Подробнее
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.90403 1.02903C3.02607 0.90699 3.22393 0.90699 3.34597 1.02903L7.09597 4.77903C7.21801 4.90107 7.21801 5.09893 7.09597 5.22097L3.34597 8.97097C3.22393 9.09301 3.02607 9.09301 2.90403 8.97097C2.78199 8.84893 2.78199 8.65107 2.90403 8.52903L6.43306 5L2.90403 1.47097C2.78199 1.34893 2.78199 1.15107 2.90403 1.02903Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card__project">
                            <div
                                className="item__img"
                                style={{
                                    backgroundImage:
                                        "url(./../assets/img/projectimg.png)",
                                }}
                            ></div>
                            <div className="item__desc">
                                <img
                                    src="/assets/img/projects1.svg"
                                    alt="projects1"
                                />
                                <p className="title">
                                    Всероссийская программа «IT Start»
                                </p>
                                <p className="desc">
                                    Всероссийская программа поддержки
                                    научно-технического творчества молодежи в
                                    сфере информационных технологий «IT Start»
                                    реализуется с 2012 года.
                                </p>
                                <button>
                                    Подробнее
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.90403 1.02903C3.02607 0.90699 3.22393 0.90699 3.34597 1.02903L7.09597 4.77903C7.21801 4.90107 7.21801 5.09893 7.09597 5.22097L3.34597 8.97097C3.22393 9.09301 3.02607 9.09301 2.90403 8.97097C2.78199 8.84893 2.78199 8.65107 2.90403 8.52903L6.43306 5L2.90403 1.47097C2.78199 1.34893 2.78199 1.15107 2.90403 1.02903Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectFinished;
