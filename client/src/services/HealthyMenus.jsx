import axios from 'axios';

const RESR_API_URL = 'http://localhost:8081/healthy_menus';

export const getHealthyMenus = async () => {
    if (!RESR_API_URL) {
        throw new Error('API URL is not set');
    }
    try {
        const response = await axios.get(RESR_API_URL);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching healthy menus:', error);
        throw error; // Optional: rethrow the error to handle it elsewhere
    }
};
