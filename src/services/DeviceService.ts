import axios from 'axios';

const API_URL = 'https://eccotrack.windowschannel.com';

class DeviceService {
    async getAllDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/api/devices`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async updateListDevices(): Promise<any> {
        try {
            const { data } = await axios.put(`${API_URL}/api/devices/update`);            
            return data ;
        } catch (error) {
            throw error;
        }
    }
}

export default new DeviceService();