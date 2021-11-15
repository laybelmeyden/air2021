import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contact = () => {
    const mapData = {
        center: [55.717841, 37.686326],
        zoom: 17,
    };
    const mapOption = {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/map.svg',
            iconImageSize: [58, 58],
    };
    return (
        <div>
            <div className="container">
                <Helmet>
                    <title>АИР - Контакты</title>
                    <meta name="description" content="Контакты" />
                </Helmet>
                <div className="item__contact">
                    <div className="info">
                        <h1>115088, Москва, ул. 2-я Машиностроения, д. 25 стр.5, офис 412</h1>
                        <a href="tel:8(499) 753 – 01 – 25">8(499) 753 – 01 – 25</a>
                        <a href="mailto:info@rusinnovation.com">info@rusinnovation.com</a>
                    </div>
                    <YMaps>
                        <Map className="map" defaultState={mapData}>
                            <Placemark
                                geometry={[55.717551, 37.687926]}
                                options={mapOption}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
