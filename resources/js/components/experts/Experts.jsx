import React from "react";
import Footer from "../footer/Footer";
import ExpertsLink from "./ExpertsLink";
import { Helmet } from "react-helmet";

const Experts = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Helmet>
                <title>АИР - Эксперты агентства</title>
                <meta name="description" content="Эксперты агентства" />
            </Helmet>
            <div className="container experts">
                <div>
                    <ExpertsLink />
                </div>
                <div className="item__experts">
                    <h1>Эксперты агентства</h1>
                    <div className="experts__grid">
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/kritsin.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Артем Крицын</p>
                                <p className="desc">заместитель директора КГУ «Государственные технологии»</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/bebenin.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Матвей Бебенин</p>
                                <p className="desc">менеджер продукта в компании «Сбер»</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/sulyaman.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Фанис Сулейманов</p>
                                <p className="desc">менеджер продукта в «Тинькофф»</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/irina.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Ирина Андреева</p>
                                <p className="desc">преподаватель в ВШЭ и Нетологии, эксперт MACS</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/posryak.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Андрей Поскряков</p>
                                <p className="desc">консультант по клиентоориентированности</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/puxov.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Семен Пухов</p>
                                <p className="desc">специалист по проектной деятельности детского технопарка "Кванториум Саров"</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/vetrov.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Дмитрий Ветров</p>
                                <p className="desc">Сoddy преподаватель python, c/c++</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/babux.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Алина Бабух</p>
                                <p className="desc">консультант в области графического и web-дизайна</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/pirov.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Игорь Пиир</p>
                                <p className="desc">венчурный инвестор, автор и директор акселерационной международной программы «Startup Mastery» (Израиль)</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/karmo.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Шириф Кармо</p>
                                <p className="desc">главный операционный директор в GetShop.TV</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/koryakin.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Станислав Корякин</p>
                                <p className="desc">продюсер проектов развития, эксперт в сфере стратегических коммуникаций, политконсультант</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="/assets/experts/novikov.png" alt="" />
                            </div>
                            <div className="info">
                                <p className="name">Сергей Новиков</p>
                                <p className="desc">директор инженерно-экономического института МАИ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Experts;
