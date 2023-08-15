import axios from 'axios';

const API_URL = 'https://api-nettrotter.windowschannel.com/sigfox/devices';

class deviceService {
    async getDevices(): Promise<any> {
        try {
            console.log('devices/acciona start');
            const { data } = await axios.get(`${API_URL}`);
            return data;
        } catch (error) {
            console.log('devices/acciona',error);
            throw error;
        }
    }
}

export default new deviceService();