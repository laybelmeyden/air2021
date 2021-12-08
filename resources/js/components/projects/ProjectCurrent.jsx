import React, { useEffect, useState } from "react";
import ProjectLink from "./ProjectLink";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { ProjectsAPI } from "../api";

const ProjectCurrent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [project, setProject] = useState([]);
    useEffect(() => {
        ProjectsAPI.allProjectActually().then((res) => {
            const result = res.data;
            setProject(result.data);
        });
    }, []);
    return (
        <div>
            <div className="container item__projects">
                <Helmet>
                    <title>АИР - Текущие проекты</title>
                    <meta name="description" content="Текущие проекты" />
                </Helmet>
                <div>
                    <ProjectLink />
                </div>
                <div className="project__grid">
                    {project.map((e, index) => (
                        <Link to={`/projects/${e.id}`} key={e.id}>
                            <div className="card__project">
                                <div
                                    className="item__img"
                                    style={{
                                        backgroundImage: `url(/storage/${e.image})`,
                                    }}
                                ></div>
                                <div className="item__desc">
                                    <img
                                        src={`/storage/${e.icon}`}
                                        alt={e.icon}
                                    />
                                    <p className="title">
                                        {e.title}
                                    </p>
                                    <p className="desc">{e.minititle.length < 210 ? e.minititle : e.minititle.slice(0, 210) + "..."}</p>
                                    <button>
                                        Подробнее
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
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectCurrent;
