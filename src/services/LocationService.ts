import axios from 'axios';

const API_URL = 'https://eccotrack.windowschannel.com';

class LocationService {
    async getLocationAllDevice(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/api/devices`);
            console.log(data);
            const locations = data.map( item =>{
                return {
                    id: item.id,
                    name: item.name,
                    lastUbication: item.lastComputedLocation
                }
            })
            return locations;
            
        } catch (error) {
            throw error;
        }
    }
}

export default new LocationService();