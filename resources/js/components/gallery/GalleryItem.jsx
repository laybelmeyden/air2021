import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryThunkCreater } from "../redux/galleryReducer";

const GalleryItem = (props) => {
    const dispatch = useDispatch();
    const gallery = useSelector(
        (state) => state.galleryPage.galleryYearsFileName
    );
    React.useEffect(() => {
        dispatch(getGalleryThunkCreater());
    }, []);
    return (
        <div className="container">
            {gallery
                .filter((e) =>
                    e.includes(window.location.pathname.split("!")[0].slice(14))
                )
                .map((e) => (
                    <p>{e}</p>
                ))}
        </div>
    );
};

export default GalleryItem;
