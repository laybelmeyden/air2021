import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const News = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container news news__solo__item">
                <Helmet>
                    <title>АИР - Новости</title>
                    <meta name="description" content="Реализованные проекты" />
                </Helmet>
                <div className="card__grid">
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">мероприятия</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">анонс</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">мероприятия</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">анонс</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">мероприятия</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
                    <div>
                        <Link to="">
                            <div className="card">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage:
                                            "url(./assets/img/rounded.png)",
                                    }}
                                ></div>
                                <div className="news__text">
                                    <p className="sub__title">анонс</p>
                                    <p className="title">
                                        Бесплатный образовательный курс и
                                        международный конкурс
                                    </p>
                                    <p className="date">24 июня 2021</p>
                                    <p className="body">
                                        Обучающий курс поможет без знания языка
                                        программирования собрать свой первый
                                        проект с использованием виртуальной
                                        реальности.
                                    </p>
                                    <button>
                                        Читать
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
            </div>
            <Footer />
        </div>
    );
};

export default News;
