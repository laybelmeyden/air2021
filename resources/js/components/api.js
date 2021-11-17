import axios from "axios";

const BASE_API_URL =
    window.document.location.protocol +
    "//" +
    window.document.location.host +
    "/api";

export const AuthAPI = {
    postLogin: (user) => {
        return axios.post(`${BASE_API_URL}/login`, user);
    },
    postRegister: (user) => {
        return axios.post(`${BASE_API_URL}/register`, user, {
            credentials: "include",
        });
    },
    postLogout: (user) => {
        return axios.post(`${BASE_API_URL}/logout`, user, {
            credentials: "include",
        });
    },
    currentUser: () => {
        return axios.get(`${BASE_API_URL}/user`, {
            credentials: "include",
        });
    },
};

export const EventsAPI = {
    allEvent:() =>{
        return axios.get(`${BASE_API_URL}/events`)
    },
    allEventActually:(e) =>{
        return axios.get(`${BASE_API_URL}/eventsActually?page=${e || 1}`)
    },
    allEventNonActually:(e) =>{
        return axios.get(`${BASE_API_URL}/eventsNonActually?page=${e || 1}`)
    },
    getOneEvents:(id) => {
        return axios.get(`${BASE_API_URL}/events/${id}`)
    }
}
export const NewsAPI = {
    allNews:(e) =>{
        return axios.get(`${BASE_API_URL}/news?page=${e || 1}`)
    },
    allNewsActually:(e) =>{
        return axios.get(`${BASE_API_URL}/allNewsMain`)
    },
    getOneNews:(id) => {
        return axios.get(`${BASE_API_URL}/news/${id}`)
    }
}
