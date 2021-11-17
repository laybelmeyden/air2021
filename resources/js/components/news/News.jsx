import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { NewsAPI } from "../api";
import Footer from "../footer/Footer";
import ReactPaginate from "react-paginate";

const News = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [news, setNews] = useState([]);
    const [newsPage, setNewsPage] = useState([]);
    useEffect(() => {
        NewsAPI.allNews().then((res) => {
            const result = res.data;
            const pageCount = res.data.meta.last_page;
            setNewsPage(pageCount);
            setNews(result.data);
        });
    }, []);
    const handlePageClick = (data) => {
        const currentPage = data.selected >= 0 ? data.selected + 1 : 0;
        NewsAPI.allNews(currentPage).then((res) => {
            const result = res.data;
            setNews(result.data);
        });
        window.scrollTo(0, 300);
    };
    return (
        <div>
            <div className="container news news__solo__item">
                <Helmet>
                    <title>АИР - Новости</title>
                    <meta name="description" content="Реализованные проекты" />
                </Helmet>
                <div className="card__grid">
                    {news.map((e, index) => (
                        <div key={e.id}>
                            <Link to={`/news/${e.id}`}>
                                <div className="card">
                                    <div
                                        className="img"
                                        style={{
                                            backgroundImage: `url(/storage/${e.image})`,
                                        }}
                                    ></div>
                                    <div className="news__text">
                                        <p className="sub__title">
                                            {e.other || "анонс"}
                                        </p>
                                        <p className="title">
                                            {e.body.slice(0,50) + '...'}
                                        </p>
                                        <p className="date">{e.date}</p>
                                        <p className="body" dangerouslySetInnerHTML={{ __html: e.sodnew.slice(0,120) + '...' }}>
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
                    ))}
                </div>
                <div className="paginate">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        pageCount={newsPage}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default News;
