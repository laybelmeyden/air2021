import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

const Gallery = (props) => {
    const [location, setLocation] = useState(
        window.location.pathname.slice(-4)
    );
    useEffect(() => {
        location === "lery" && setLocation("2021");
    }, []);
    return (
        <div className="container">
            <Helmet>
                <title>АИР - Галерея</title>
                <meta name="description" content="АИР - Галерея" />
            </Helmet>
            <div className="gallery">
                <div className="gallery__links">
                    {props.galleryPage.gallery.map((e, index) => (
                        <NavLink
                            to={`/gallery/${e.slice(-4)}`}
                            key={index}
                            onClick={() => setLocation(e.slice(-4))}
                        >
                            <div className="item">{e.slice(-4)}</div>
                        </NavLink>
                    ))}
                </div>
                <div className="gallery__item">
                    {props.galleryPage.galleryYearsOut.filter((e, i) =>
                        e.includes(location)
                    ).length !== 0 ? (
                        props.galleryPage.galleryYearsOut
                            .filter((e, i) => e.includes(location))
                            .map((e, i) => (
                                <Link key={i} to={`/gallery/${e.slice(14)}`}>
                                    <p>{i > 0 && e}</p>
                                </Link>
                            ))
                    ) : (
                        <div>Такого года нет!</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
