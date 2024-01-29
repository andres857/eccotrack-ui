import axios from 'axios';

const HOST = 'https://api-nettrotter.windowschannel.com';

class deviceService {
    lastSeen(lastSeenDevice: number){        
        let differenceTime;
        const now = new Date();
        let lastCom = new Date(lastSeenDevice);

        let differenceInMilliseconds = now.getTime() - lastCom.getTime();                
        let differenceInMinutes = differenceInMilliseconds / (1000 * 60);

        if (differenceInMinutes > 1440) {
            let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
            differenceTime = `${Math.round(differenceInDays)} days`;
        } else if(differenceInMinutes < 60){
            differenceTime = `${Math.round(differenceInMinutes)} minutes`;
        }else {
            let differenceInhours = differenceInMilliseconds / (1000 * 60 * 60);
            differenceTime = `${Math.round(differenceInhours)} hours`;
        }
        return differenceTime;
    }

    async getAllDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${HOST}/sigfox/mi/devices`);            
            const devices = data.data.map( (item: any) =>{

                return {
                    id: item.id,
                    name: item.name,
                    state: item.comState === 1 ? true : false,
                    lastSeen: this.lastSeen(item.lastCom),
                    lastUbication: item.lastComputedLocation,
                    microBasestation: item.hasOwnProperty('lastComputedLocation')
                }
            })
            return devices;
        } catch (error) {
            throw error;
        }
    }

    async getDevice(id: string): Promise<any> {
        try {
            const { data } = await axios.get(`${HOST}/sigfox/mi/devices/${id}`);
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
    
    async getOnBoarding(id:string, limit = 25): Promise<any> {
        try {
            const onboarding = await axios.get(`${HOST}/history-location/mi/onboarding/${id}?limit=${limit}`);          
            return onboarding.data;
        } catch (error) {
            throw error;
        }
    }

    devicesList: any [] = [
        {
            "id": "348875",
            "name": "348875",
           "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "348882",
            "name": "348882",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "348EEC",
            "name": "348EEC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "3490EF",
            "name": "3490EF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C03498",
            "name": "C03498",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0C967",
            "name": "C0C967",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0CB8B",
            "name": "C0CB8B",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0E91C",
            "name": "C0E91C",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0ED89",
            "name": "C0ED89",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1BFCF",
            "name": "C1BFCF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1C1E1",
            "name": "C1C1E1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1C20D",
            "name": "C1C20D",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1CCFF",
            "name": "C1CCFF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C218D0",
            "name": "C218D0",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C220F6",
            "name": "C220F6",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C223CA",
            "name": "C223CA",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C223D2",
            "name": "C223D2",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C22493",
            "name": "C22493",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C225C1",
            "name": "C225C1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C23889",
            "name": "C23889",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C25907",
            "name": "C25907",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C25D6A",
            "name": "C25D6A",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C261B7",
            "name": "C261B7",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C263F1",
            "name": "C263F1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C26858",
            "name": "C26858",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C26EEB",
            "name": "C26EEB",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C284E6",
            "name": "C284E6",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C28CF9",
            "name": "C28CF9",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2A6A8",
            "name": "C2A6A8",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AA6E",
            "name": "C2AA6E",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AB55",
            "name": "C2AB55",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2ACEC",
            "name": "C2ACEC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2ACFC",
            "name": "C2ACFC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AFCA",
            "name": "C2AFCA",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2B10F",
            "name": "C2B10F",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF4A",
            "name": "C2CF4A",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF7C",
            "name": "C2CF7C",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF87",
            "name": "C2CF87",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2D054",
            "name": "C2D054",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        }
    ]

    devicesListReport: any [] = [
        {
            "id": "348875",
            "name": "348875",
           "ubication":"Makeitalia",
                      concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
           
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "348882",
            "name": "348882",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "348EEC",
            "name": "348EEC",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "3490EF",
            "name": "3490EF",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C03498",
            "name": "C03498",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0C967",
            "name": "C0C967",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0CB8B",
            "name": "C0CB8B",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0E91C",
            "name": "C0E91C",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C0ED89",
            "name": "C0ED89",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1BFCF",
            "name": "C1BFCF",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1C1E1",
            "name": "C1C1E1",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1C20D",
            "name": "C1C20D",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C1CCFF",
            "name": "C1CCFF",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C218D0",
            "name": "C218D0",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C220F6",
            "name": "C220F6",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C223CA",
            "name": "C223CA",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C223D2",
            "name": "C223D2",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C22493",
            "name": "C22493",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C225C1",
            "name": "C225C1",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C23889",
            "name": "C23889",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C25907",
            "name": "C25907",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C25D6A",
            "name": "C25D6A",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C261B7",
            "name": "C261B7",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C263F1",
            "name": "C263F1",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C26858",
            "name": "C26858",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C26EEB",
            "name": "C26EEB",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C284E6",
            "name": "C284E6",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C28CF9",
            "name": "C28CF9",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2A6A8",
            "name": "C2A6A8",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AA6E",
            "name": "C2AA6E",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AB55",
            "name": "C2AB55",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2ACEC",
            "name": "C2ACEC",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2ACFC",
            "name": "C2ACFC",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2AFCA",
            "name": "C2AFCA",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2B10F",
            "name": "C2B10F",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF4A",
            "name": "C2CF4A",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF7C",
            "name": "C2CF7C",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2CF87",
            "name": "C2CF87",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        },
        {
            "id": "C2D054",
            "name": "C2D054",
            "ubication":"Makeitalia",
                       concentracion: null,
           proximidad: null,
           qualitySignal: false,
           onboarding: false,
           // tracking: true,
            coordinates:{
                lat: 44.51182078113969,
                lng: 11.278424781706551
            },
        }
    ]
}

const devicesServiceInstance = new deviceService();
export default devicesServiceInstance;
export const devicesList = devicesServiceInstance.devicesList;
export const devicesListReport = devicesServiceInstance.devicesListReport;