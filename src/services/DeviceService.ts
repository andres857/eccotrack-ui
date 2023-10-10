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
            "id": "C0E915",
            "name": "Grupo Electrogeno 1",
            'ubication': 'Chamartin',
            concentracion: null,
            proximidad: null,
            qualitySignal: false,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.4725097845423,
                lng: -3.682144767
            },
        },
        {
            "id": "C2247B",
            "name": "Grupo Electrogeno 2",
            'ubication': 'Chamartin',
            concentracion: null,
            proximidad: null,
            qualitySignal: true,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.4725097845423,
                lng: -3.682144767
            },
        },
        {
            "id": "C2AA7C",
            "name": "Grupo Electrogeno 3",
            'ubication': 'Alcala de Henares',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.4894717968370,
                lng: -3.365457714
            },
        },
        {
            "id": "C28F15",
            "name": "Grupo Electrogeno 4",
            'ubication': 'El Escorial',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: false,
            coordinates:{
                lat: 40.5852864961765,
                lng: -4.132255414
            },
        },
        {
            "id": "C2CF85",
            "name": "Grupo Electrogeno 5",
            'ubication': 'Guadalajara',
            concentracion: true,
            proximidad: false,
            qualitySignal: false,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.6439772144758,
                lng: -3.182267588
            },
        },
        {
            "id": "C26EEC",
            "name": "Grupo Electrogeno 6",
            'ubication': 'Principe Pio',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.4205141003862,
                lng: -3.719563008
            },
        },
        {
            "id": "C26EF2",
            "name": "Grupo Electrogeno 7",
            'ubication': 'Villalba',
            concentracion: true,
            proximidad: false,
            qualitySignal: true,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.6264955543625,
                lng: -4.008038572
            },
        },
        {
            "id": "C26EE9",
            "name": "Rotativa 1",
            'ubication': 'Malaga',
            concentracion: null,
            proximidad: null,
            qualitySignal: null,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
        },
        {
            "id": "C2661D",
            "name": "Aspiradora 1",
            'ubication': 'Malaga',
            concentracion: true,
            proximidad: false,
            qualitySignal: true,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
        },
        {
            "id": "C218D2",
            "name": "Sopladora 1",
            'ubication': 'Malaga',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
        },
        {
            "id": "C1BDCB",
            "name": "Rotativa 2",
            'ubication': 'Sevilla CTT',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
        },
        {
            "id": "C2D074",
            "name": "Aspiradora 2",
            'ubication': 'Sevilla CTT',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
        },
        {
            "id": "C2B109",
            "name": "Sopladora 2",
            'ubication': 'Sevilla CTT',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
        },
        {
            "id": "C26CBA",
            "name": "Trituradora 1",
            'ubication': 'Toledo Sagra',
            concentracion: true,
            proximidad: false,
            qualitySignal: true,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 39.9593106554009,
                lng: -3.84657849
            },
        },
        {
            "id": "C2AEC1",
            "name": "T290 1",
            'ubication': 'Alcorcón',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.3502746162539,
                lng: -3.831896599
            },
        },
        {
            "id": "C1C206",
            "name": "T290 2",
            'ubication': 'Leganes',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.3286656743908,
                lng: -3.771186375
            },
        },
        {
            "id": "C26613",
            "name": "T290 3",
            'ubication': 'El Pozo',
            concentracion: null,
            proximidad: null,
            qualitySignal: false,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.3761326193531,
                lng: -3.656194488
            },
        },
        {
            "id": "C26857",
            "name": "Nilfisk 1",
            'ubication': 'Villaverde BMI',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
        },
        {
            "id": "C2AB4A",
            "name": "Nilfisk 2",
            'ubication': 'Villaverde BMI',
            concentracion: true,
            proximidad: true,
            qualitySignal: false,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
        },
        {
            "id": "C24C84",
            "name": "Nilfisk 3",
            'ubication': 'Villaverde BMI',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
        },
        {
            "id": "C261C3",
            "name": "Hidropresora 1",
            'ubication': 'Santa Catalina',
            concentracion: true,
            proximidad: false,
            qualitySignal: true,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.3759421774773,
                lng: -3.68004721
            },
        },
        {
            "id": "C26CB8",
            "name": "Hidropresora 2",
            'ubication': 'Atocha',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.4056219333573,
                lng: -3.689039174
            },
        },
        {
            "id": "C25D6B",
            "name": "T290 4",
            'ubication': 'Piramides',
            concentracion: null,
            proximidad: null,
            qualitySignal: false,
            onboarding: false,
            // tracking: true,
            coordinates:{
                lat: 40.4025125230714,
                lng: -3.711426433
            },
        },
        {
            "id": "C297E8",
            "name": "T290 5",
            'ubication': 'Villaverde Bajo',
            concentracion: true,
            proximidad: true,
            qualitySignal: true,
            onboarding: true,
            // tracking: true,
            coordinates:{
                lat: 40.3517073171226,
                lng: -3.687507391
            },
        },
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