import { CompetetionsAPI, EventsAPI, NewsAPI, PartnersAPI, ProjectsAPI } from "../api";

const GET_NEWS = "GET_NEWS";
const GET_PROJECTS = "GET_PROJECTS";
const GET_EVENTS = "GET_EVENTS";
const GET_COMPETETIONS = "GET_COMPETETIONS";
const GET_PARTNERS = "GET_PARTNERS";
const LOADING = "LOADING";
const READY = "READY";

const initialState = {
    news: [],
    events: [],
    partners: [],
    competetions: [],
    projects: [],
    status: "",
};

const mainpageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.news };
        case GET_PROJECTS:
            return { ...state, projects: action.projects };
        case GET_EVENTS:
            return { ...state, events: action.events };
        case GET_COMPETETIONS:
            return { ...state, competetions: action.competetions };
        case GET_PARTNERS:
            return { ...state, partners: action.partners };
        case LOADING:
            return { ...state, status: (action.status = "loading") };
        case READY:
            return { ...state, status: (action.status = "ready") };
        default:
            return state;
    }
};
// actionCreaters
export const getNews = (news) => {
    return { type: GET_NEWS, news };
};
export const getProjects = (projects) => {
    return { type: GET_PROJECTS, projects };
};
export const getLoading = () => {
    return { type: LOADING };
};
export const getReady = () => {
    return { type: READY };
};
export const getEvents = (events) => {
    return { type: GET_EVENTS, events };
};
export const getCompetetions = (competetions) => {
    return { type: GET_COMPETETIONS, competetions };
};
export const getPartners = (partners) => {
    return { type: GET_PARTNERS, partners };
};

// thunkCraters
export const getNewsThunkCreater = () => {
    return (dispatch) => {
        dispatch(getLoading());
        NewsAPI.allNewsActually().then( async (res) => {
            const result = res.data;
            const imagePromise = result.data.map(
                ({ other2 }) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = `/storage/${other2}`;
                        img.onload = () => {
                            resolve(img);
                        };
                    })
            );
            await Promise.all(imagePromise);
            dispatch(getReady());
            dispatch(getNews(result.data));
        });
    };
};

export const getEventsThunkCreater = () => {
    return (dispatch) => {
        EventsAPI.allEvent().then((res) => {
            const result = res.data;
            dispatch(getEvents(result.data));
        });
    };
};

export const getProjectsThunkCreater = () => {
    return (dispatch) => {
        ProjectsAPI.allProjectActually().then((res) => {
            const result = res.data;
            dispatch(getProjects(result.data));
        });
    };
};

export const getCompetetionsThunkCreater = () => {
    return (dispatch) => {
        CompetetionsAPI.allCompetetions().then((res) => {
            const result = res.data;
            dispatch(getCompetetions(result.data));
        });
    };
};

export const getPartnersThunkCreater = () => {
    return (dispatch) => {
        PartnersAPI.allPartners().then((res) => {
            const result = res.data;
            dispatch(getPartners(result.data));
        });
    };
};

export default mainpageReducer;
