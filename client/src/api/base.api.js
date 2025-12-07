import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        console.log("API Error:", error);
        return Promise.reject(error);
    }
);

export default api;