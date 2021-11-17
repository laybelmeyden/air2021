import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <footer>
            <div className="container footer__grid">
                <div className="logo__footer">
                    <Link to="/">
                        <img
                            src="/assets/img/airfooter.svg"
                            alt="airfooter.svg"
                        />
                    </Link>
                </div>
                <div className="href">
                    <Link to="/about">Об Агентстве</Link>
                    <Link to="/projects">Проекты</Link>
                    <Link to="/news">НОВОСТИ</Link>
                    <Link to="/events">Мероприятия</Link>
                </div>
                <div className="href">
                    <Link to="/experts">Экспертно-методический блок</Link>
                    {/* <Link to="">Галерея</Link> */}
                    <Link to="/contact">контакты</Link>
                </div>
                <div className="social">
                    <a
                        href="https://yandex.ru/maps/-/CCUinVhf2B"
                        target="_blank"
                    >
                        115088, г. Москва, <br />
                        ул. 2-я Машиностроения,
                        <br /> 25 строение «5» оф. 412
                    </a>
                    <a href="tel:+7 (499) 753-01-25">+7 (499) 753-01-25</a>
                    <a href="mail:info@rusinnovations.com">
                        info@rusinnovations.com
                    </a>
                    <div className="link__social">
                        <a href="https://vk.com/aidrussia" target="_blank">
                            <img src="/assets/img/vk.svg" alt="" />
                        </a>
                        <a
                            href="https://www.facebook.com/groups/2621611817948990/"
                            target="_blank"
                        >
                            <img src="/assets/img/face.svg" alt="" />
                        </a>
                        <a
                            href="https://www.instagram.com/airpressa/"
                            target="_blank"
                        >
                            <img src="/assets/img/inst.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
