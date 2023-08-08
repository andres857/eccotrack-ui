import axios from 'axios';

const API_URL = 'https://api.sigfox.com/v2/devices';
const username = "64cc22597a1e8b660d2cb357";
const password = "5cd842177e25e679dac37044f5c5829d";

class deviceService {
    async getDevices(): Promise<any> {
        try {
            console.log('devices/acciona start');
            const { data } = await axios.get(`${API_URL}`, {
                params: { 
                    username: username,
                    password: password
                }
            });
            return data;
        } catch (error) {
            console.log('devices/acciona',error);
            throw error;
        }
    }
}

export default new deviceService();