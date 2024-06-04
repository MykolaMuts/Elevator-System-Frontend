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

export const getStatus = async () => {
    try {
        return await axios.get(`${API_URL}/status`);
    } catch (error) {
        console.error('Error fetching status:', error);
        throw error;
    }
};

export const initializeSystem = async (elevatorsNumber: number, lowestFloor: number, highestFloor: number) => {
    try {
        return await axios.post(`${API_URL}/initialize`, null, {
            params: { elevatorsNumber, lowestFloor, highestFloor }
        });
    } catch (error) {
        console.error('Error initializing system:', error);
        throw error;
    }
};