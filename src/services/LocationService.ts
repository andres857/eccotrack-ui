import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid';
import axios from 'axios';
import DeviceService from './DeviceService';
// recupera la info de SIGFOX
const API_URL = 'https://api-nettrotter.windowschannel.com';

class LocationService {
    async getDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/sigfox/devices`);
            const devices = data.data.map( (item: any) =>{
                return {
                    id: item.id,
                    name: item.name
                }
            })
            return devices;
        } catch (error) {
            throw error;
        }
    }
    async getDeviceInfo(id: string): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/sigfox/devices/${id}`);
            return {
                id:data.id,
                sequenceNumber:data.sequenceNumber,
                lastCom:data.lastCom,//The last time (in milliseconds since the Unix Epoch) the device has communicated
                state:data.state,//1 -> DEAD: The device is not complying with its keepalive, it is suspected to be faulty.0
                comState:data.comState,//3 -> RED: Keepalive is enabled at device-type-level. Communication is allowed but keepalive is not met.1
                lastComputedLocation:data.lastComputedLocation,
                deviceType:data.deviceType,
                group:data.group
            }           
        } catch (error) {
            throw error;
        }
    }
    async getOnBoardingLocation(id:string): Promise<any> {
        try {
            const onboarding = await axios.get(`${API_URL}/history-location/onboarding/${id}`);          
            return onboarding.data;
        } catch (error) {
            throw error;
        }
    }
    async getLastLocation(id:string): Promise<any>{
        try {
            const {data} = await axios.get(`${API_URL}/history-location/last/${id}`);
            // console.log(`device with id: ${id} last ubication: ${data}`);            
            return data;
        } catch (error) {
            throw error;
        }
    }
    async lastSeen(lastSeenDevice: number){
        let differenceTime;
        const now = new Date();
        let lastCom = new Date(lastSeenDevice);
        let differenceInMilliseconds = now.getTime() - lastCom.getTime();                
        let differenceInMinutes = differenceInMilliseconds / (1000 * 60);

        if (differenceInMinutes > 1440) {
            let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
            differenceTime = `${Math.round(differenceInDays)} dias`;
        } else if(differenceInMinutes < 60){
            differenceTime = `${Math.round(differenceInMinutes)} minutos`;
        }else {                    
            let differenceInhours = differenceInMilliseconds / (1000 * 60 * 60);
            differenceTime = `${Math.round(differenceInhours)} horas`;
        }
        return differenceTime;
    }
    async generateTable(){
        const devices= [
            {
                "id": "C0E915",
                "name": "Grupo Electrogeno 2",
                'ubication': 'Chamartin',
                'coordinates':{
                    lat: 40.4725097845423,
                    lng: -3.682144767
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C26EF2",
                "name": "Rotativa 1",
                'ubication': 'Malaga',
                'coordinates':{
                    lat: 36.7111006427816,
                    lng: -4.433438829
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C26EE9",
                "name": "Aspiradora 1",
                'ubication': 'Malaga',
                'coordinates':{
                    lat: 36.7111006427816,
                    lng: -4.433438829
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C2661D",
                "name": "Sopladora 1",
                'ubication': 'Malaga',
                'coordinates':{
                    lat: 36.7111006427816,
                    lng: -4.433438829
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C218D2",
                "name": "Rotativa 2",
                'ubication': 'Sevilla CTT',
                'coordinates':{
                    lat: 37.4086196534172,
                    lng: -5.959022271
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C2D074",
                "name": "Sopladora 2",
                'ubication': 'Sevilla CTT',
                'coordinates':{
                    lat: 37.4086196534172,
                    lng: -5.959022271
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C1BDCB",
                "name": "Aspiradora 2",
                'ubication': 'Sevilla CTT',
                'coordinates':{
                    lat: 37.4086196534172,
                    lng: -5.959022271
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C2D03F",
                "name": "T290 1",
                'ubication': 'Alcorcón',
                'coordinates':{
                    lat: 40.3502746162539,
                    lng: -3.831896599
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C2AEC1",
                "name": "T290 2",
                'ubication': 'Leganes',
                'coordinates':{
                    lat: 40.3286656743908,
                    lng: -3.771186375
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C1C206",
                "name": "T290 3",
                'ubication': 'El Pozo',
                'coordinates':{
                    lat: 40.3761326193531,
                    lng: -3.656194488
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C26613",
                "name": "Nilfisk 1",
                'ubication': 'Villaverde BMI',
                'coordinates':{
                    lat: 40.3444389210696,
                    lng: -3.679611939
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C26857",
                "name": "Nilfisk 2",
                'ubication': 'Villaverde BMI',
                'coordinates':{
                    lat: 40.3444389210696,
                    lng: -3.679611939
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C2AB4A",
                "name": "Nilfisk 3",
                'ubication': 'Villaverde BMI',
                'coordinates':{
                    lat: 40.3444389210696,
                    lng: -3.679611939
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C24C84",
                "name": "Hidropresora 1",
                'ubication': 'Santa Catalina',
                'coordinates':{
                    lat: 40.3759421774773,
                    lng: -3.68004721
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C26CB8",
                "name": "T290 4",
                'ubication': 'Piramides',
                'coordinates':{
                    lat: 40.4025125230714,
                    lng: -3.711426433
                },
                "status": '',
                "lastseen": '',
            },
            {
                "id": "C25D6B",
                "name": "T290 5",
                'ubication': 'Villaverde Bajo',
                'coordinates':{
                    lat: 40.3517073171226,
                    lng: -3.687507391
                },
                "status": '',
                "lastseen": '',
            },
        ];

        const devicesUpdated = await Promise.all( devices.map (async device => {
            const deviceinfo = await this.getDeviceInfo(device.id);
            console.log('device INFO',deviceinfo);
            const lastSeenDevice = await this.lastSeen(deviceinfo.lastCom);
            console.log(lastSeenDevice);
            return {
                id: device.id,
                name: device.name,
                ubication: device.ubication,
                state: deviceinfo.comState === 1 ? 'Conectado' : 'Desconectado',
                lastSeen: lastSeenDevice
            };
        }));
        console.log('koko', devicesUpdated);
        return devicesUpdated;
    }

    async getLocationAllDevice(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/devices`);            
            const locations = data.data.map( item =>{
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