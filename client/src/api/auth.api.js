import api from "./base.api";

export async function loginUser(userData) {
    try {
        const response = await api.post('token/', userData);

        localStorage.setItem('access', response.data.access)
        localStorage.setItem('refresh', response.data.refresh)

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        const errorText = "Credenciais inválidas";

        return {
            success: false,
            error: errorText,
        };
    }
}

export async function logoutUser(refreshTokenData) {
    const response = await api.post('logout/', refreshTokenData);

    localStorage.clear();

    return response.data;
}

export async function registerUser(userData) {
    try {
        const response = await api.post('user/register/', userData);
        return {
            success: true,
            data: response.data
        };

    } catch (error) {
        return {
            success: false,
            error: error.response.data.username
        };
    }
}

export async function getUserInfo() {
    const response = await api.get('user/info/');
    return response.data;
}