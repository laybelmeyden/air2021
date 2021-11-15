import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import MerosLink from "./MerosLink";

const Meros = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container meros news__solo__item">
                <Helmet>
                    <title>АИР - Текущие мероприятия</title>
                    <meta name="description" content="Реализованные проекты" />
                </Helmet>
                <div>
                    <MerosLink />
                </div>
                <div className="meros__grid">
                    <Link to="/">
                        <div
                            className="card"
                            style={{
                                backgroundImage:
                                    "url(./assets/img/meroitem.png)",
                            }}
                        >
                            <p className="date">22-24 ОКТЯБРЯ</p>
                            <p className="title">
                                Окружной фестиваль интерактивных технологий “Шаг
                                в будущее
                            </p>
                            <button>
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.90403 1.52903C3.02607 1.40699 3.22393 1.40699 3.34597 1.52903L7.09597 5.27903C7.21801 5.40107 7.21801 5.59893 7.09597 5.72097L3.34597 9.47097C3.22393 9.59301 3.02607 9.59301 2.90403 9.47097C2.78199 9.34893 2.78199 9.15107 2.90403 9.02903L6.43306 5.5L2.90403 1.97097C2.78199 1.84893 2.78199 1.65107 2.90403 1.52903Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link to="/">
                        <div
                            className="card"
                            style={{
                                backgroundImage:
                                    "url(./assets/img/meroitem.png)",
                            }}
                        >
                            <p className="date">22-24 ОКТЯБРЯ</p>
                            <p className="title">
                                Окружной фестиваль интерактивных технологий “Шаг
                                в будущее
                            </p>
                            <button>
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.90403 1.52903C3.02607 1.40699 3.22393 1.40699 3.34597 1.52903L7.09597 5.27903C7.21801 5.40107 7.21801 5.59893 7.09597 5.72097L3.34597 9.47097C3.22393 9.59301 3.02607 9.59301 2.90403 9.47097C2.78199 9.34893 2.78199 9.15107 2.90403 9.02903L6.43306 5.5L2.90403 1.97097C2.78199 1.84893 2.78199 1.65107 2.90403 1.52903Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link to="/">
                        <div
                            className="card"
                            style={{
                                backgroundImage:
                                    "url(./assets/img/meroitem.png)",
                            }}
                        >
                            <p className="date">22-24 ОКТЯБРЯ</p>
                            <p className="title">
                                Окружной фестиваль интерактивных технологий “Шаг
                                в будущее
                            </p>
                            <button>
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.90403 1.52903C3.02607 1.40699 3.22393 1.40699 3.34597 1.52903L7.09597 5.27903C7.21801 5.40107 7.21801 5.59893 7.09597 5.72097L3.34597 9.47097C3.22393 9.59301 3.02607 9.59301 2.90403 9.47097C2.78199 9.34893 2.78199 9.15107 2.90403 9.02903L6.43306 5.5L2.90403 1.97097C2.78199 1.84893 2.78199 1.65107 2.90403 1.52903Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link to="/">
                        <div
                            className="card"
                            style={{
                                backgroundImage:
                                    "url(./assets/img/meroitem.png)",
                            }}
                        >
                            <p className="date">22-24 ОКТЯБРЯ</p>
                            <p className="title">
                                Окружной фестиваль интерактивных технологий “Шаг
                                в будущее
                            </p>
                            <button>
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.90403 1.52903C3.02607 1.40699 3.22393 1.40699 3.34597 1.52903L7.09597 5.27903C7.21801 5.40107 7.21801 5.59893 7.09597 5.72097L3.34597 9.47097C3.22393 9.59301 3.02607 9.59301 2.90403 9.47097C2.78199 9.34893 2.78199 9.15107 2.90403 9.02903L6.43306 5.5L2.90403 1.97097C2.78199 1.84893 2.78199 1.65107 2.90403 1.52903Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                    <Link to="/">
                        <div
                            className="card"
                            style={{
                                backgroundImage:
                                    "url(./assets/img/meroitem.png)",
                            }}
                        >
                            <p className="date">22-24 ОКТЯБРЯ</p>
                            <p className="title">
                                Окружной фестиваль интерактивных технологий “Шаг
                                в будущее
                            </p>
                            <button>
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.90403 1.52903C3.02607 1.40699 3.22393 1.40699 3.34597 1.52903L7.09597 5.27903C7.21801 5.40107 7.21801 5.59893 7.09597 5.72097L3.34597 9.47097C3.22393 9.59301 3.02607 9.59301 2.90403 9.47097C2.78199 9.34893 2.78199 9.15107 2.90403 9.02903L6.43306 5.5L2.90403 1.97097C2.78199 1.84893 2.78199 1.65107 2.90403 1.52903Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Meros;
