import api from "./base.api";

const ENDPOINT = "/task/";

export async function getTasks() {
    const response = await api.get(`${ENDPOINT}`);
    return response.data;
}

export async function createTask(taskData) {
    const response = await api.post(`${ENDPOINT}`, taskData);
    return response.data;
}

export async function editTask(id, taskData) {
    const response = await api.put(`${ENDPOINT}${id}/`, taskData);
    return response.data;
}

export async function deleteTask(id) {
    const response = await api.delete(`${ENDPOINT}${id}/`);
    return response.data;
}

