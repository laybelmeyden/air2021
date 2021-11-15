import React from "react";
import SideBar from "./SideBar";
import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";

const Teams = () => {
    return (
        <div>
            <div className="container grid__item">
                <Helmet>
                    <title>АИР - Наша команда</title>
                    <meta name="description" content="Наша команда" />
                </Helmet>
                <div>
                    <SideBar />
                </div>
                <div className="item__teams">
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/saxarov.png" alt="saxarov.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Станислав Сахаров</p>
                            <p className="chapter">Президент Агентства</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:sks@rusinnovations.com">
                                    sks@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/sergeev.png" alt="sergeev.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Никита Сергеев</p>
                            <p className="chapter">Директор проектного офиса</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:ns@rusinnovations.com">
                                ns@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/marieva.png" alt="marieva.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Анна Мариева</p>
                            <p className="chapter">Главный бухгалтер</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:ak@rusinnovations.com">
                                ak@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/koteln.png" alt="koteln.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Евгения Котельникова</p>
                            <p className="chapter">Блок социальных проектов и програм</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:elk@rusinnovations.com">
                                elk@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/rezn.png" alt="rezn.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Андрей Резников</p>
                            <p className="chapter">Блок коммерческих проектов и программ</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:ar@rusinnovations.com">
                                ar@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <div>
                                <img src="/assets/img/bahturv.png" alt="bahturv.png" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="fio">Иван Бахтуров</p>
                            <p className="chapter">Блок интернет проектов и разработок</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#CBD5E0"
                                    />
                                    <path
                                        d="M20.9997 18.0102C20.9397 18.2874 20.8271 18.5359 20.5939 18.726C20.349 18.9259 20.0638 19.0002 19.7484 18.9999C16.8602 18.9992 13.9718 18.9996 11.0836 18.9996C10.1316 18.9996 9.17931 19.0009 8.22733 18.9989C7.72874 18.9979 7.34178 18.8007 7.12536 18.3663C7.04797 18.2114 7.00653 18.0249 7.00585 17.8527C6.99865 15.2845 6.999 12.7166 7.00208 10.1484C7.00276 9.46952 7.513 9.00257 8.24068 9.00224C11.612 9.00159 14.983 9.00192 18.3543 9.00192C18.819 9.00192 19.2837 9.00942 19.7484 9.00028C20.4018 8.98757 20.898 9.40202 20.9815 9.94364C20.9839 9.95994 20.9935 9.97559 21 9.99125C20.9997 12.6645 20.9997 15.3374 20.9997 18.0102ZM8.04721 9.57191C8.08693 9.61234 8.09823 9.62571 8.11158 9.63712C9.92549 11.2131 11.7391 12.7897 13.5547 14.3637C13.8601 14.6285 14.1509 14.6206 14.4638 14.3487C16.2552 12.7939 18.0454 11.2385 19.8364 9.68375C19.8693 9.65538 19.908 9.63354 19.9443 9.60843C19.9371 9.59636 19.9299 9.58397 19.9227 9.57191C15.9743 9.57191 12.026 9.57191 8.04721 9.57191ZM8.04138 18.3918C8.04892 18.4045 8.05645 18.4172 8.06364 18.4299C12.0212 18.4299 15.9788 18.4299 19.9764 18.4299C18.4238 17.0379 16.9102 15.6628 15.321 14.3598C15.1641 14.4948 15.0234 14.6324 14.8648 14.7475C14.7107 14.859 14.5498 14.9761 14.3717 15.0396C13.905 15.2063 13.4992 15.0641 13.1427 14.7582C12.9883 14.6255 12.8338 14.4925 12.6571 14.3405C11.1127 15.696 9.57689 17.0437 8.04138 18.3918ZM7.59621 18.0282C9.15466 16.6596 10.6871 15.3132 12.2233 13.9642C10.6908 12.6322 9.15979 11.3014 7.62874 9.97103C7.61779 9.97755 7.60683 9.98375 7.59621 9.99027C7.59621 12.6605 7.59621 15.3308 7.59621 18.0282ZM15.7771 13.9645C17.3177 15.3178 18.8502 16.6635 20.398 18.0226C20.398 15.3289 20.398 12.6573 20.398 9.94755C18.8344 11.3067 17.302 12.6387 15.7771 13.9645Z"
                                        fill="#014483"
                                    />
                                </svg>
                                <a href="mailto:info@rusinnovations.com">
                                info@rusinnovations.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Teams;
