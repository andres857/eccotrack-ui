import axios from 'axios';
import DistanceService from './DistanceService';
import DeviceService from './DeviceService';

// recupera la info de SIGFOX
const API_URL = 'https://api-nettrotter.windowschannel.com';

class LocationService {

    async locations(id: string, limit = 25): Promise<any>{
        try {
            const locations = await axios.get(`${API_URL}/history-location/mi/${id}?limit=${limit}`);          
            console.log('locationService * location history', locations.data);
            return locations.data;
        } catch (error) {
            throw error;
        }
    }

    async getLastLocation(id:string): Promise<any>{
        try {
            const { data } = await axios.get(`${API_URL}/history-location/mi/last/${id}`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Determina si un device esta en el rango para una ubicacion dada
    async deviceIsRange(id: string, locationUbication: any){
        const onboardingLocation = await DeviceService.getOnBoarding(id);
        // function que compara ambas y retorna true o false
        const isRange = await DistanceService.calculateDistance(locationUbication, onboardingLocation, 2000);
        return isRange;
    }

    // asigna los devices a las locations definidas, not seen y en transito
    async devicesAtLocation(){
        let report: Array<{ 
            location: any,
            device: any,
            status: any, 
            lastSeen: any 
        }> = [];

        const locations = this.onboardingLocations();
        const devices = await DeviceService.getAllDevices();

        // Retorna los devices desconectados
        let devicesDisconnected = devices.map((device: any)=>{        
            if (!device.state){
                // Obtener la ultima ubicacion conocida asociada a una sede                
                return {
                    location: 'Disconneted', 
                    device: device.id,
                    status: false,
                    lastSeen: device.lastSeen
                }
            }
        })

        // Retorna los devices asociados a una location.
        const promises = devices.map(async ( device:any )=>{
            let countLocations = 0;             
             const matches = await Promise.all ( locations.map( async ( location )=>{
                const isRange = await DistanceService.calculateDistance(device.id, location.Coordinates, device.lastUbication, 15000);
                if (isRange === true && device.state){
                    return  {
                        location: location.Name,
                        device: device.id,
                        status: device.state,
                        lastSeen: device.lastSeen
                    }
                }else if(isRange === false){
                    countLocations ++;
                    if (countLocations >= 3) {
                        console.log(`El device con id ${device.id} no esta asociado con ninguna ubicacion`);
                        return  {
                            location: 'In transit',
                            device: device.id,
                            status: device.state,
                            lastSeen: device.lastSeen
                        }
                    }
                }
                else{
                    return null;
                }
            }))
            report.push(...matches.filter(match => match !== null));
        })

        // Retorna los devices activos pero que no estan en el rango de la sede.
        // const promises1 = devices.map(async ( device: any )=>{
        //     let countLocations = 0;
        //     const matches = await Promise.all ( locations.map( async ( location )=>{
        //         const isRange = await DistanceService.calculateDistance(device.id, location.Coordinates, device.lastUbication, 10);
        //         if (isRange === false){
        //             countLocations = countLocations + 1;
        //         }
        //         // console.log('device: ', device.id ,'location: ', location.Name, 'count', countLocations);
        //         if(countLocations >= 3){                    
        //             console.log(`El device con id ${device.id} no esta asociado con ninguna ubicacion`);
        //             // countLocations = 0;
        //             return  {
        //                 location: 'In transit',
        //                 device: device.id,
        //                 status: device.state,
        //                 lastSeen: device.lastSeen
        //             }
        //         }
        //     }))
        //     report.push(...matches.filter(match => match !== null));
        // })
        
        await Promise.all(promises);
        // await Promise.all(promises1);
        report.push(...devicesDisconnected);
        return report;
    }

    // async infoDevices(){
    //     const devicesUpdated = await Promise.all( devicesList.map ( async device => {
    //         const deviceinfo = await this.getDevice(device.id);
    //         const lastSeenDevice = await this.lastSeen(deviceinfo.lastCom);
    //         const IsRange = await this.deviceIsRange(device.id, device.coordinates);
    //         const onboarding = await this.getOnBoardingLocation(device.id);            
    //         return {
    //             id: device.id,
    //             name: device.name,
    //             ubication: device.ubication,
    //             coordinates: device.coordinates,
    //             qualitySignal: deviceinfo.qualitySignal,
    //             state: deviceinfo.comState === 1 ? 'Conectado' : 'Desconectado',
    //             lastSeen: lastSeenDevice,
    //             onboardingLocation: IsRange,
    //             onboardingCoordinates: onboarding,
    //         };
    //     }));
    //     return devicesUpdated;
    // }

    // async reportDevices(){
    //     const devicesUpdated = await Promise.all( devicesListReport.map ( async ( device ) => {
    //         const deviceinfo = await this.getDevice(device.id);
    //         const lastSeenDevice = await this.lastSeen(deviceinfo.lastCom);
    //         return {
    //             id: device.id,
    //             name: device.name,
    //             ubication: device.ubication,
    //             state: deviceinfo.comState === 1 ? true : false,
    //             lastSeen: lastSeenDevice,
    //         };
    //     }));
    //     return devicesUpdated;
    // }

    // Onboarding coordinates of locations
    onboardingLocations(){
        const locations = [
            {
                Name: 'Makeitalia',
                Coordinates: {
                    lat: 44.65118620446493,
                    lng: 10.960114434341872
                }
            },
            {
                Name: 'Oltre Solutions',
                Coordinates: {
                    lat: 44.51422930141049,
                    lng: 11.331751299886024
                }
            },
            {
                Name: 'Puro',
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