import React, { useEffect, useState } from "react";
import Footer from "./../footer/Footer";
import { Helmet } from "react-helmet";
import { ProjectsAPI } from "../api";
import { useParams } from "react-router";



const ProjectItem = () => {
    const [project, setProject] = useState("");
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
                    <div
                        className="bcg__main"
                        style={{
                            backgroundImage: `url(/storage/${project.image})`,
                        }}
                    ></div>
                </div>
                <div>
                <h1>{project.title}</h1>
                <h2 dangerouslySetInnerHTML={{ __html: project.body }}></h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ProjectItem;
