import React from "react";
import SideBar from "./SideBar";
import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";

const Cooperation = () => {
    return (
        <div>
        <div className="container grid__item">
            <Helmet>
                <title>АИР - Сотрудничество</title>
                <meta name="description" content="Сотрудничество" />
            </Helmet>
            <div>
                <SideBar />
            </div>
            <div className="item__cooperation">
                <h1>Агентство инновационного развития развивает региональную партнерскую сеть для совместной реализации проектов в сфере популяризации научно-технического творчества и инноваций. Мы будем рады совместной работе с Вами в рамках проводимых мероприятий.</h1>
                <h2>Если у Вас есть предложения по партнерству в рамках Ваших проектов, мы тоже готовы их рассмотреть.</h2>
                <h3>По вопросам сотрудничества обращайтесь на:</h3>
                <a href="mailto:sales@rusinnovations.com">sales@rusinnovations.com</a>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    );
};

export default Cooperation;
