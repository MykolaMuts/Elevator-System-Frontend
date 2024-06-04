import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const pickup = (floor: number, direction: number) => {
    return axios.post(`${API_URL}/pickup`, null, {
        params: { floor, direction }
    });
};

export const step = () => {
    return axios.post(`${API_URL}/step`);
};

export const getStatus = () => {
    return axios.get(`${API_URL}/status`);
};