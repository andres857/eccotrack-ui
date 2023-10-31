import axios from 'axios';
import DistanceService from './DistanceService';
import { devicesList, devicesListReport } from './DeviceService';

// recupera la info de SIGFOX
const API_URL = 'https://api-nettrotter.windowschannel.com';

class LocationService {

    async getDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/sigfox/mi/devices`);
            const devices = data.data.map( (item: any) =>{
                return {
                    id: item.id,
                    name: item.name,
                    state: item.comState,//revisar cual es
                    lastSeen: item.lastSeen,
                    lastUbication: item.lastComputedLocation
                }
            })
            return devices;
        } catch (error) {
            throw error;
        }
    }
    async locations(id: string, limit = 25): Promise<any>{
        try {
            const locations = await axios.get(`${API_URL}/history-location/mi/${id}?limit=${limit}`);          
            console.log('locationService * location history', locations.data);
            return locations.data;
        } catch (error) {
            throw error;
        }
    }
    async getDeviceInfo(id: string): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/sigfox/mi/devices/${id}`);
            console.log('id device',id);
            const info = {
                id:data.id,
                sequenceNumber:data.sequenceNumber,
                lastCom:data.lastCom,//The last time (in milliseconds since the Unix Epoch) the device has communicated
                state:data.state,//1 -> DEAD: The device is not complying with its keepalive, it is suspected to be faulty.0
                comState:data.comState,//3 -> RED: Keepalive is enabled at device-type-level. Communication is allowed but keepalive is not met.1
                lastComputedLocation:data.lastComputedLocation,
                deviceType:data.deviceType,
                group:data.group,
                qualitySignal: data.lqi
            }
            return info;
        } catch (error) {
            throw error;
        }
    }
    async getOnBoardingLocation(id:string, limit = 25): Promise<any> {
        try {
            const onboarding = await axios.get(`${API_URL}/history-location/mi/onboarding/${id}?limit=${limit}`);          
            return onboarding.data;
        } catch (error) {
            throw error;
        }
    }
    async getLastLocation(id:string): Promise<any>{
        try {
            const { data } = await axios.get(`${API_URL}/history-location/mi/last/${id}`);
            // console.log(`device with id: ${id} last ubication: ${data}`);            
            return data;
        } catch (error) {
            throw error;
        }
    }
    lastSeen(lastSeenDevice: number){
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
    // Determina si un device esta en el rango para una ubicacion dada
    async deviceIsRange(id: string, locationUbication: any){
        const onboardingLocation = await this.getOnBoardingLocation(id);
        // function que compara ambas y retorna true o false
        const isRange = await DistanceService.calculateDistance(locationUbication, onboardingLocation, 500);
        return isRange;
    }
    // asigna los devices a las locations definidas, not seen y en transito
    async deviceIsLocation(){
        let report: Array<{ 
            location: any,
            device: any,
            status: any, 
            lastSeen: any 
        }> = [];

        const locations = this.onboardingLocations();
        const devices = await this.getDevices();
        // const devices = await this.reportDevices();

        // definir el array respuesta donde se asignen los devices a las locations
        const promises = devices.map(async ( device )=>{
            const matches = await Promise.all ( locations.map( async ( location )=>{
                const isRange = await DistanceService.calculateDistance(location.Coordinates, device.lastUbication, 500);
                if (isRange){
                    const lastSeen = this.lastSeen(device.lastSeen);
                    return  {
                        location: location.Name,
                        device: device.id,
                        status: device.state === 1 ? 'Conectado' : 'Desconectado',
                        lastSeen: lastSeen
                    }
                }
                return null;
            }))
            report.push(...matches.filter(match => match !== null));
        })
        await Promise.all(promises);        
        return report;
    }
    async infoDevices(){
        const devicesUpdated = await Promise.all( devicesList.map ( async device => {
            const deviceinfo = await this.getDeviceInfo(device.id);
            const lastSeenDevice = await this.lastSeen(deviceinfo.lastCom);
            const IsRange = await this.deviceIsRange(device.id, device.coordinates);
            const onboarding = await this.getOnBoardingLocation(device.id);            
            return {
                id: device.id,
                name: device.name,
                ubication: device.ubication,
                coordinates: device.coordinates,
                qualitySignal: deviceinfo.qualitySignal,
                state: deviceinfo.comState === 1 ? 'Conectado' : 'Desconectado',
                lastSeen: lastSeenDevice,
                onboardingLocation: IsRange,
                onboardingCoordinates: onboarding,
            };
        }));
        return devicesUpdated;
    }
    async reportDevices(){
        const devicesUpdated = await Promise.all( devicesListReport.map ( async ( device ) => {
            const deviceinfo = await this.getDeviceInfo(device.id);
            const lastSeenDevice = await this.lastSeen(deviceinfo.lastCom);
            return {
                id: device.id,
                name: device.name,
                ubication: device.ubication,
                state: deviceinfo.comState === 1 ? true : false,
                lastSeen: lastSeenDevice,
            };
        }));
        return devicesUpdated;
    }
    onboardingLocations(){
        const locations = [
            {
                Name: 'notseen',
                Coordinates: {
                    lat: 43.369835228477356,
                    lng: 13.586193334088431
                }
            },
            {
                Name: 'Makeitalia',
                Coordinates: {
                    lat: 44.65118620446493,
                    lng: 10.960114434341872
                }
            },
            {
                Name: 'oltreSolutions',
                Coordinates: {
                    lat: 44.51422930141049,
                    lng: 11.331751299886024
                }
            },
            {
                Name: 'puro',
                Coordinates: {
                    lat: 43.369835228477356,
                    lng: 13.586193334088431
                }
            },
            {
                Name: 'intransit',
                Coordinates: {
                    lat: 43.369835228477356,
                    lng: 13.586193334088431
                }
            }
        ];
        return locations;
    }
}

export default new LocationService();