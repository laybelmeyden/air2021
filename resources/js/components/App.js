import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPageContainer from "./mainpage/MainPageContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
                <Helmet>
                    <title>11</title>
                    <meta name="description" content="Nested component" />
                </Helmet>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <MainPageContainer />}
                    />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
