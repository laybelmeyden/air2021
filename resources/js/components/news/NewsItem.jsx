import React, { useEffect, useState } from "react";
import Footer from "./../footer/Footer";
import { Helmet } from "react-helmet";
import { NewsAPI } from "../api";
import { useParams } from "react-router";

export default function NewsItem() {
    const [news, setNews] = useState("");
    const { id } = useParams();
    useEffect(() => {
        NewsAPI.getOneNews(id).then((res) => {
            const result = res.data;
            const news = result.data;
            setNews(news);
        });
    }, []);
    return (
        <div>
            <Helmet>
                <title>{news.body}</title>
                <meta name="description" content={news.body} />
            </Helmet>
            <div className="container item__events">
                <div className="img">
                    <div
                        className="bcg__main"
                        style={{
                            backgroundImage: `url(/storage/${news.other2 ? news.other2 : news.image})`,
                        }}
                    ></div>
                </div>
                <h1>{news.body}</h1>
                <h2 dangerouslySetInnerHTML={{ __html: news.sodnew }}></h2>
            </div>
            <Footer />
        </div>
    );
}
