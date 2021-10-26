import React, { useState } from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";

const MainPageContainer = () => {
    return <MainPage />;
};
const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(MainPageContainer);
