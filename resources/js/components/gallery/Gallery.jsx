import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import Preloader from "./../preloader/Preloader";

const Gallery = (props) => {
    const [location, setLocation] = useState(
        window.location.pathname.slice(-4)
    );
    const [miniLoader, setMiniLoader] = useState(false);
    useEffect(() => {
        location === "lery" && setLocation("2021");
    }, []);
    const psevdoLoader = () => {
        setTimeout(() => {
            setMiniLoader(false);
        }, 500);
        setMiniLoader(true);
    };
    return (
        <div>
            <div className="container">
                <Helmet>
                    <title>АИР - Галерея</title>
                    <meta name="description" content="АИР - Галерея" />
                </Helmet>
                {props.galleryPage.loading ? (
                    <Preloader />
                ) : (
                    <div className="gallery">
                        <div className="gallery__links">
                            {props.galleryPage.gallery.map((e, index) => (
                                <NavLink
                                    to={`/gallery/${e.slice(-4)}`}
                                    key={index}
                                    onClick={() => {
                                        setLocation(e.slice(-4));
                                        psevdoLoader();
                                    }}
                                >
                                    <div className="item">{e.slice(-4)}</div>
                                </NavLink>
                            ))}
                        </div>
                        {miniLoader ? (
                            <Preloader />
                        ) : (
                            <div className="gallery__item">
                                {props.galleryPage.galleryYearsOut.filter(
                                    (e, i) => e.includes(location)
                                ).length !== 0 ? (
                                    props.galleryPage.galleryYearsOut
                                        .filter((e, i) => e.includes(location))
                                        .map(
                                            (e, i) =>
                                                i > 0 && (
                                                    <Link
                                                        key={i}
                                                        to={`/gallery/${e.slice(
                                                            14
                                                        )}`}
                                                    >
                                                        <div className="card">
                                                            <img
                                                                src={`/storage${props.galleryPage.galleryYearsFileName
                                                                    .filter(
                                                                        (el) =>
                                                                            el.includes(
                                                                                e
                                                                            )
                                                                    )[0]
                                                                    .slice(6)}`}
                                                                alt=""
                                                            />
                                                            <p>
                                                                {
                                                                    e.split(
                                                                        "!"
                                                                    )[1]
                                                                }
                                                            </p>
                                                            <div className="btn">
                                                                Смотреть
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
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                        )
                                ) : (
                                    <div>Такого года нет!</div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
