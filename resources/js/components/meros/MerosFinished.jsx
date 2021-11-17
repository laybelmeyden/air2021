import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { EventsAPI } from "../api";
import MerosLink from "./MerosLink";
import ReactPaginate from "react-paginate";
import Footer from "../footer/Footer";

const MerosFinished = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [event, setEvent] = useState([]);
    const [eventPage, setEventPage] = useState([]);
    useEffect(() => {
        EventsAPI.allEventNonActually().then((res) => {
            const result = res.data;
            const pageCount = res.data.meta.last_page;
            setEventPage(pageCount);
            setEvent(result.data);
        });
    }, []);
    const handlePageClick = (data) => {
        const currentPage = data.selected >= 0 ? data.selected + 1 : 0;
        EventsAPI.allEventNonActually(currentPage).then((res) => {
            const result = res.data;
            setEvent(result.data);
        });
        window.scrollTo(0, 300);
    };
    return (
        <div>
            <div className="container meros news__solo__item">
                <Helmet>
                    <title>АИР - Прошедшие мероприятия</title>
                    <meta name="description" content="Реализованные проекты" />
                </Helmet>
                <div>
                    <MerosLink />
                </div>
                <div className="meros__grid">
                    {event.map(
                        (e, index) =>
                            e.actually != true && (
                                <Link to={`/events/${e.id}`} key={e.id}>
                                    <div className="card">
                                        <div
                                            className="bcg__main"
                                            style={{
                                                backgroundImage: `url(/storage/${e.image})`,
                                            }}
                                        ></div>
                                        <p className="date">{e.date}</p>
                                        <p className="title">
                                            {e.title.slice(0, 60) + "..."}
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
                </div>
                <div className="paginate">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            pageCount={eventPage}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                        />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MerosFinished;
