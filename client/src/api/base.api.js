import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        const isLoginRequest =
            originalRequest.url.includes("token/");

        if (isLoginRequest) {
            return Promise.reject(error);
        }

        if (error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const newAccess = await refreshToken();

            if (newAccess) {
                originalRequest.headers.Authorization = `Bearer ${newAccess}`;
                return api(originalRequest);
            } else {
                localStorage.clear();
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
)

const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh');

    if (!refresh) return null;

    try {
        const resp = await axios.post("http://127.0.0.1:8000/api/v1/token/refresh/", {refresh});

        localStorage.setItem("access", resp.data.access);
        return resp.data.access;
    } catch {
        return null;
    }
}

export default api;