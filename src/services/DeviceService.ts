import axios from 'axios';

const API_URL = 'https://api-nettrotter.windowschannel.com/sigfox/mi';

class deviceService {

    devicesList: any [] = [
        {
            "id": "348875",
            "name": "348875",
           "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "348882",
            "name": "348882",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "348EEC",
            "name": "348EEC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "3490EF",
            "name": "3490EF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C03498",
            "name": "C03498",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C0C967",
            "name": "C0C967",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C0CB8B",
            "name": "C0CB8B",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C0E91C",
            "name": "C0E91C",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C0ED89",
            "name": "C0ED89",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C1BFCF",
            "name": "C1BFCF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C1C1E1",
            "name": "C1C1E1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C1C20D",
            "name": "C1C20D",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C1CCFF",
            "name": "C1CCFF",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C218D0",
            "name": "C218D0",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C220F6",
            "name": "C220F6",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C223CA",
            "name": "C223CA",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C223D2",
            "name": "C223D2",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C22493",
            "name": "C22493",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C225C1",
            "name": "C225C1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C23889",
            "name": "C23889",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C25907",
            "name": "C25907",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C25D6A",
            "name": "C25D6A",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C261B7",
            "name": "C261B7",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C263F1",
            "name": "C263F1",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C26858",
            "name": "C26858",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C26EEB",
            "name": "C26EEB",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C284E6",
            "name": "C284E6",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C28CF9",
            "name": "C28CF9",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2A6A8",
            "name": "C2A6A8",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2AA6E",
            "name": "C2AA6E",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2AB55",
            "name": "C2AB55",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2ACEC",
            "name": "C2ACEC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2ACFC",
            "name": "C2ACFC",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2AFCA",
            "name": "C2AFCA",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2B10F",
            "name": "C2B10F",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2CF4A",
            "name": "C2CF4A",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2CF7C",
            "name": "C2CF7C",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2CF87",
            "name": "C2CF87",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        },
        {
            "id": "C2D054",
            "name": "C2D054",
            "ubication":"Makeitalia",
            coordinates:{
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
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
                lat: 44.65996291256079,
                lng: 10.969647276087807
            },
        }
    ]
    
    async getDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/devices`);
            return data;
        } catch (error: any) {
            console.log(error.message);
            throw error;
        }
    }
}

const devicesServiceInstance = new deviceService();
export default devicesServiceInstance;
export const devicesList = devicesServiceInstance.devicesList;
export const devicesListReport = devicesServiceInstance.devicesListReport;