import axios from 'axios';

const API_URL = 'https://api.pinegrove.io';
const username = "aguerrero";
const password = "wchannel2022";

class LocationService {
    async getLocationAllDevice(): Promise<any> {
        try {
            console.log('devices/acciona start');
            
            const { data } = await axios.get(`${API_URL}/devices/acciona`, {
                params: { 
                    username: username,
                    password: password
                }
            });
            const locations = data.map( item =>{
                return {
                    id: item.id,
                    name: item.name,
                    lastUbication: item.lastComputedLocation
                }
            })
            return locations;
        } catch (error) {
            console.log('devices/acciona',error);
            throw error;
        }
    }
    async getCoordenadas(){
        const locations = await this.getLocationAllDevice();
        const coordinates = locations.map( item =>{
            return {
                ubication: item.lastUbication
            }
        })
        return coordinates;
    }
}

export default new LocationService();