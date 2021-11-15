import React, { useState } from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";

export const SampleNextArrow = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow right">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                >
                    <rect x="0.698242" width="30" height="30" rx="15" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6023 11.029C13.7243 10.907 13.9222 10.907 14.0442 11.029L17.7942 14.779C17.9163 14.9011 17.9163 15.0989 17.7942 15.221L14.0442 18.971C13.9222 19.093 13.7243 19.093 13.6023 18.971C13.4802 18.8489 13.4802 18.6511 13.6023 18.529L17.1313 15L13.6023 11.471C13.4802 11.3489 13.4802 11.1511 13.6023 11.029Z"
                        fill="#F7FAFC"
                    />
                </svg>
            </div>
        </div>
    );
};

export const SamplePrevArrow = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow left">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                >
                    <rect
                        width="30"
                        height="30"
                        rx="15"
                        transform="matrix(-1 0 0 1 30.6982 0)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7942 11.029C17.6722 10.907 17.4743 10.907 17.3523 11.029L13.6023 14.779C13.4802 14.9011 13.4802 15.0989 13.6023 15.221L17.3523 18.971C17.4743 19.093 17.6722 19.093 17.7942 18.971C17.9163 18.8489 17.9163 18.6511 17.7942 18.529L14.2652 15L17.7942 11.471C17.9163 11.3489 17.9163 11.1511 17.7942 11.029Z"
                        fill="#F7FAFC"
                    />
                </svg>
            </div>
        </div>
    );
};
export const SampleNextArrowCompetence = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow right">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                >
                    <rect x="0.5" y="0.5" width="20" height="20" rx="10" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.82322 7.32322C8.92085 7.22559 9.07915 7.22559 9.17678 7.32322L12.1768 10.3232C12.2744 10.4209 12.2744 10.5791 12.1768 10.6768L9.17678 13.6768C9.07915 13.7744 8.92085 13.7744 8.82322 13.6768C8.72559 13.5791 8.72559 13.4209 8.82322 13.3232L11.6464 10.5L8.82322 7.67678C8.72559 7.57915 8.72559 7.42085 8.82322 7.32322Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export const SamplePrevArrowCompetence = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow left">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                >
                    <rect
                        width="20"
                        height="20"
                        rx="10"
                        transform="matrix(-1 0 0 1 20.5 0.5)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1768 7.32322C12.0791 7.22559 11.9209 7.22559 11.8232 7.32322L8.82322 10.3232C8.72559 10.4209 8.72559 10.5791 8.82322 10.6768L11.8232 13.6768C11.9209 13.7744 12.0791 13.7744 12.1768 13.6768C12.2744 13.5791 12.2744 13.4209 12.1768 13.3232L9.35355 10.5L12.1768 7.67678C12.2744 7.57915 12.2744 7.42085 12.1768 7.32322Z"
                    />
                </svg>
            </div>
        </div>
    );
};
export const SampleNextArrowMeros = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow right">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                >
                    <rect x="0.698242" width="30" height="30" rx="15" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6023 11.029C13.7243 10.907 13.9222 10.907 14.0442 11.029L17.7942 14.779C17.9163 14.9011 17.9163 15.0989 17.7942 15.221L14.0442 18.971C13.9222 19.093 13.7243 19.093 13.6023 18.971C13.4802 18.8489 13.4802 18.6511 13.6023 18.529L17.1313 15L13.6023 11.471C13.4802 11.3489 13.4802 11.1511 13.6023 11.029Z"
                        fill="#F7FAFC"
                    />
                </svg>
            </div>
        </div>
    );
};

export const SamplePrevArrowMeros = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow left">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                >
                    <rect
                        width="30"
                        height="30"
                        rx="15"
                        transform="matrix(-1 0 0 1 30.6982 0)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7942 11.029C17.6722 10.907 17.4743 10.907 17.3523 11.029L13.6023 14.779C13.4802 14.9011 13.4802 15.0989 13.6023 15.221L17.3523 18.971C17.4743 19.093 17.6722 19.093 17.7942 18.971C17.9163 18.8489 17.9163 18.6511 17.7942 18.529L14.2652 15L17.7942 11.471C17.9163 11.3489 17.9163 11.1511 17.7942 11.029Z"
                        fill="#F7FAFC"
                    />
                </svg>
            </div>
        </div>
    );
};

const MainPageContainer = () => {
    const [open, setOpen] = useState({ active: false, name: "" });
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
    const settings__mero = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings__competence = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        variableWidth: true,
        row: 1,
        nextArrow: <SampleNextArrowCompetence />,
        prevArrow: <SamplePrevArrowCompetence />
    };
    const settings__meros = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        variableWidth: true,
        row: 1,
        nextArrow: <SampleNextArrowMeros />,
        prevArrow: <SamplePrevArrowMeros />
    };
    const handleOpen = (e) => {
        setOpen({ active: true, name: e });
    };
    const handleClose = (e) => {
        setOpen({ active: false, name: e });
    };
    const onBtnClose = () => {
        setOpen({ active: false, name: "" });
    };

    return (
        <MainPage
            settings__mero={settings__mero}
            settings__competence={settings__competence}
            settings__meros={settings__meros}
            style={style}
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            onBtnClose={onBtnClose}
        />
    );
};
const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(MainPageContainer);
