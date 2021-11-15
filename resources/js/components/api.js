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
