import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryThunkCreater } from "../redux/galleryReducer";
import Preloader from "./../preloader/Preloader";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Footer from "../footer/Footer";

const GalleryItem = (props) => {
    const dispatch = useDispatch();
    const gallery = useSelector(
        (state) => state.galleryPage.galleryYearsFileName
    );
    const loading = useSelector((state) => state.galleryPage.loading);
    React.useEffect(() => {
        dispatch(getGalleryThunkCreater());
    }, []);
    return (
        <div>
            <div className="container">
                {loading ? (
                    <Preloader />
                ) : (
                    <div className="solo__gall">
                        <h1>{gallery.filter((e) =>
                                    e.includes(
                                        window.location.pathname
                                            .split("!")[0]
                                            .slice(14)
                                    )
                                )[0].split("!")[1].split("/")[0]}</h1>
                        <LightGallery
                            elementClassNames="light__container"
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                        >
                            {gallery
                                .filter((e) =>
                                    e.includes(
                                        window.location.pathname
                                            .split("!")[0]
                                            .slice(14)
                                    )
                                )
                                .map((e, i) => (
                                    <a href={`/storage${e.slice(6)}`} key={i}>
                                        <img
                                            // alt={e.split("!")[1]}
                                            src={`/storage${e.slice(6)}`}
                                        />
                                    </a>
                                ))}
                        </LightGallery>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default GalleryItem;
