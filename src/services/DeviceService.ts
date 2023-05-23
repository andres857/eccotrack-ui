import axios from 'axios';

const API_URL = 'https://eccotrack.windowschannel.com';

class DeviceService {
    async getAllDevices(): Promise<any> {
        try {
            const devices = await axios.get(`${API_URL}/api/devices`);
            return devices.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new DeviceService();