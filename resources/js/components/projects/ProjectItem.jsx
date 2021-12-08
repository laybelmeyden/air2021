import React, { useEffect, useState } from "react";
import Footer from "./../footer/Footer";
import { Helmet } from "react-helmet";
import { ProjectsAPI } from "../api";
import { useParams } from "react-router";

const ProjectItem = () => {
    const [project, setProject] = useState("");
    const variables = [
        ` <div className="item__cells">
                <div>
                    <p className="number__cels">{">"} 15000</p>
                    <p className="text">человек приняли участие в проекте</p>
                </div>
                <div>
                    <p className="number__cels">{">"} 40</p>
                    <p className="text">человек приняли участие </p>
                </div>
                <div>
                    <p className="number__cels">{">"} 500</p>
                    <p className="text">
                        инициатив молодых программистов получили различного рода
                        поддержку
                    </p>
                </div>
            </div>`,
        `<div className="blue__assign">
                <p>
                    Ежегодно, исходя из актуальной повестки рынка информационных
                    технологий, программа мероприятий претерпевает определенные
                    изменения. <a href="dasd">asdasd</a>
                </p>
            </div>`,
        `<p>
                На сегодняшний день основной акцент в программе сделан на
                развитие цифровых компетенций и профориентации молодежи. За
                актуальными мероприятиями программы следите в разделе текущие
                мероприятия
            </p>`,
        `<div className="number__item">
                <ul>
                    <li>
                        Мероприятие регионального уровня, направленное на
                        подготовку участников
                    </li>
                    <li>
                        Мероприятие регионального уровня, направленное на
                        подготовку участников
                    </li>
                </ul>
            </div>`,
        `<div className="number__item__img">
                <ul>
                    <li>
                        <img src="/storage/projects/Frame111.svg" alt="" />
                        Мероприятие регионального уровня, направленное на
                        подготовку участников
                    </li>
                    <li>
                        Мероприятие регионального уровня, направленное на
                        подготовку участников
                    </li>
                </ul>
            </div>`,
    ];
    console.log(variables.map((e) => e));
    const { id } = useParams();
    useEffect(() => {
        ProjectsAPI.getOneProjects(id).then((res) => {
            const result = res.data;
            const project = result.data;
            setProject(project);
        });
    }, []);
    return (
        <div>
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.title} />
            </Helmet>
            <div className="container item__projects__solo">
                <div className="img">
                    <div className="img__title">
                        <h1>{project.title}</h1>
                    </div>
                    <div
                        className="bcg__main"
                        style={{
                            backgroundImage: `url(/storage/${project.page})`,
                        }}
                    ></div>
                </div>
                <div>
                    <div className="logo__info">
                        <div className="logo">
                            <img
                                src={`/storage/${project.icon}`}
                                alt={project.icon}
                            />
                        </div>
                        <div className="info">
                            <p>{project.minititle}</p>
                        </div>
                    </div>
                    <div
                        className="variabldes__content"
                        dangerouslySetInnerHTML={{ __html: project.body }}
                    ></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ProjectItem;
