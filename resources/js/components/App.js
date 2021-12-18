import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPageContainer from "./mainpage/MainPageContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./navbar/Navbar";
import AgencyAbout from "./about/About"
import AgencyGeografy from "./about/Geografy"
import AgencyDocument from "./about/Document"
import AgencyCooperation from "./about/Cooperation"
import AgencyTeams from "./about/Teams"
import AgencyContact from "./about/Contact"
import DocumentOther from "./about/DocumentOther";
import Contact from "./contact/Contact";
import ProjectCurrent from "./projects/ProjectCurrent";
import ProjectFinished from "./projects/ProjectFinished";
import News from "./news/News";
import Meros from "./meros/Meros";
import MerosFinished from "./meros/MerosFinished";
import Experts from "./experts/Experts";
import Books from "./experts/Books";
import Login from "./admin/Login";
import Register from "./admin/Register";
import AdminPageContainer from "./admin/AdminPageContainer";
import Errror404 from "./Errror404/Errror404";
import NewsItem from "./news/NewsItem";
import EventItem from "./meros/EventItem";
import ProjectItem from "./projects/ProjectItem";
import GalleryContainer from "./gallery/GalleryContainer";
import GalleryItem from "./gallery/GalleryItem";



const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
                <Helmet>
                    <title>АИР - Главная</title>
                    <meta name="description" content="Социально-ориентированная некоммерческая организация, реализующая научно-исследовательские проекты в сфере IT, мероприятия, направленные на популяризацию научно-технического творчества в сфере цифровых технологий, образовательные проекты." />
                </Helmet>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <MainPageContainer />}
                    />
                    <Route exact path="/about" render={() => <AgencyAbout />} />
                    <Route path="/about/geografy" render={() => <AgencyGeografy />} />
                    <Route exact path="/about/document" render={() => <AgencyDocument />} />
                    <Route exact path="/about/document/other" render={() => <DocumentOther />} />
                    <Route
                        path="/about/cooperation"
                        render={() => <AgencyCooperation />}
                    />
                    <Route path="/about/teams" render={() => <AgencyTeams />} />
                    <Route path="/about/contact" render={() => <AgencyContact />} />
                    <Route exact path="/projects" render={() => <ProjectCurrent />} />
                    <Route exact path="/news" render={() => <News />} />
                    <Route path="/news/:id" render={() => <NewsItem />} />
                    <Route exact path="/events" render={() => <Meros />} />
                    <Route path="/events/finished" render={() => <MerosFinished />} />
                    <Route path="/events/:id" render={() => <EventItem />} />
                    <Route path="/projects/finished" render={() => <ProjectFinished />} />
                    <Route path="/projects/:id" render={() => <ProjectItem />} />
                    <Route exact path="/experts" render={() => <Experts />} />
                    <Route path="/experts/books" render={() => <Books />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/admin" render={() => <AdminPageContainer />} />
                    {/* <Route path="/register" render={() => <Register />} /> */}
                    <Route exact path="/gallery" render={() => <GalleryContainer />} />
                    <Route exact path="/gallery/:years" render={() => <GalleryContainer />} />
                    <Route path="/gallery/:years/:name" render={() => <GalleryItem />} />
                    <Route path="" component={Errror404} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
