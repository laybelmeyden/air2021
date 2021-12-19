import { GalleryAPI } from "../api";

const LOADING = "LOADING";
const READY = "READY";
const GET_GALLERY = "GET_GALLERY";

const initialState = {
    gallery: [],
    galleryYearsOut: [],
    galleryYearsFileName: [],
    loading: true,
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GALLERY:
            return {
                ...state,
                gallery: action.gallery,
                galleryYearsOut: action.galleryYearsOut,
                galleryYearsFileName: action.galleryYearsFileName,
            };
        case LOADING:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
};
// actionCreaters
export const getGallery = (gallery, galleryYearsOut, galleryYearsFileName) => {
    return { type: GET_GALLERY, gallery, galleryYearsOut, galleryYearsFileName };
};
export const getLoading = (loading) => {
    return { type: LOADING, loading };
};

// thunkCraters
export const getGalleryThunkCreater = () => {
    return (dispatch) => {
        GalleryAPI.galleryYears().then((res) => {
            const resultYearsName = res.data[0];
            const resultYearsNameOut = res.data[1];
            const resultYearsNameFiles = res.data[2];
            dispatch(
                getGallery(
                    resultYearsName,
                    resultYearsNameOut,
                    resultYearsNameFiles
                )
            );
            dispatch(getLoading(false));
        });
    };
};

export default galleryReducer;
