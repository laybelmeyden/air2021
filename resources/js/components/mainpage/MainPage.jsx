import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Footer from "../footer/Footer";
import { CompetetionsAPI, EventsAPI, PartnersAPI } from "../api";

const Mainpage = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    console.log(props)
    return (
        <div>
            <section className="mero__slider">
                <div className="container item__arrow">
                    <Slider {...props.settings__mero}>
                        {props.mainPage.events.map(
                            (e, index) =>
                                e.actually === "1" && (
                                    <div key={e.id}>
                                        <Link to={`/events/${e.id}`}>
                                            <div
                                                className="item__img"
                                                style={{
                                                    backgroundImage: `url(/storage/${e.slider__img})`,
                                                }}
                                            >
                                                {/* <div className="bcg__main" style={{
                                                     backgroundImage: `url(/storage/${e.slider__img})`
                                                }}></div> */}
                                                <p className="item__date">
                                                    {e.time}
                                                </p>
                                                <h2 className="item__title">
                                                    {e.title.length < 20
                                                        ? e.title
                                                        : e.title.slice(0, 60) +
                                                          "..."}
                                                </h2>
                                                <button className="item__btn">
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
                                                            fill="#F7FAFC"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        )}
                    </Slider>
                </div>
            </section>
            <section className="compitetions">
                <div className="container item__compitetions">
                    <h2>Компетенции Агентства</h2>
                    <Slider {...props.settings__competence}>
                        {props.mainPage.competetions.map((e, index) => (
                            <a
                                onClick={() => props.handleOpen(e.modal_name)}
                                key={e.id}
                            >
                                <div className="card">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: e.svg,
                                        }}
                                    ></div>
                                    <p>{e.title}</p>
                                    <button>
                                        Подробнее
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9"
                                            height="9"
                                            viewBox="0 0 9 9"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.82322 1.32322C2.92085 1.22559 3.07915 1.22559 3.17678 1.32322L6.17678 4.32322C6.27441 4.42085 6.27441 4.57915 6.17678 4.67678L3.17678 7.67678C3.07915 7.77441 2.92085 7.77441 2.82322 7.67678C2.72559 7.57915 2.72559 7.42085 2.82322 7.32322L5.64645 4.5L2.82322 1.67678C2.72559 1.57915 2.72559 1.42085 2.82322 1.32322Z"
                                                fill="#242F39"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </a>
                        ))}
                    </Slider>
                    {props.mainPage.competetions.map((e, index) => (
                        <Modal
                            keepMounted
                            key={e.id}
                            open={
                                props.open.active &&
                                props.open.name === e.modal_name
                            }
                            onClose={() => props.handleClose("")}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box sx={props.style} className="box__modal">
                                <div className="modal__grid">
                                    <div
                                        className="close"
                                        onClick={() => props.onBtnClose("")}
                                    >
                                        <img
                                            src="/assets/img/close.svg"
                                            alt="close"
                                        />
                                    </div>
                                    <div className="item__title">
                                        <img
                                            src={`storage/${e.image}`}
                                            alt="modal__item.svg"
                                        ></img>
                                        <p>{e.title}</p>
                                    </div>
                                    <div className="item__body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: e.body,
                                            }}
                                        ></p>
                                        <ul
                                            dangerouslySetInnerHTML={{
                                                __html: e.other2,
                                            }}
                                        ></ul>
                                        <p>{e.unbody}</p>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    ))}
                </div>
            </section>
            <section className="meros">
                <div className="container item__meros">
                    <h3>Ближайшие мероприятия</h3>
                    <div className="mrg">
                        <Slider {...props.settings__meros}>
                            {props.mainPage.events.map(
                                (e, index) =>
                                    e.actually === "1" && (
                                        <Link to={`/events/${e.id}`} key={e.id}>
                                            <div className="card">
                                                <div
                                                    className="bcg__main"
                                                    style={{
                                                        backgroundImage: `url(/storage/${e.preimg})`,
                                                    }}
                                                ></div>
                                                <p className="date">{e.time}</p>
                                                <p className="title">
                                                    {e.title.length < 20
                                                        ? e.title
                                                        : e.title.slice(0, 60) +
                                                          "..."}
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
                                    )
                            )}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="container news__item">
                    <h4>Новости</h4>
                    <div className="card__grid">
                        {props.mainPage.news.map((e, index) => (
                            <div key={e.id}>
                                <Link to={`/news/${e.id}`}>
                                    <div className="card">
                                        <div
                                            className="img"
                                            style={{
                                                backgroundImage: `url(/storage/${e.other2 ? e.other2 : e.image})`,
                                            }}
                                        ></div>
                                        <div className="news__text">
                                            <p className="sub__title">
                                                {e.other || "анонс"}
                                            </p>
                                            <p className="title">
                                                {e.body.slice(0, 50) + "..."}
                                            </p>
                                            <p className="date">{e.date}</p>
                                            <p
                                                className="body"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        e.sodnew.slice(0, 120) +
                                                        "...",
                                                }}
                                            ></p>
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
                        ))}
                    </div>
                </div>
            </section>
            <section className="partners">
                <div className="container partners__item">
                    <h5>Партнёры</h5>
                    <div className="partners__grid">
                        {props.mainPage.partners.map((e, index) => (
                            <a href={e.body} key={e + index}>
                                <div className="item">
                                    <img src={`storage/${e.image}`} alt={e} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Mainpage;
