import axios from 'axios';

const API_URL = 'https://api-nettrotter.windowschannel.com/sigfox';

class deviceService {

    devicesList: any [] = [
        {
            "id": "C0E915",
            "name": "Grupo Electrogeno 1",
            'ubication': 'Chamartin',
            coordinates:{
                lat: 40.4725097845423,
                lng: -3.682144767
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C0E915",
            "name": "Grupo Electrogeno 2",
            'ubication': 'Chamartin',
            coordinates:{
                lat: 40.4725097845423,
                lng: -3.682144767
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C26EE9",
            "name": "Rotativa 1",
            'ubication': 'Malaga',
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C2661D",
            "name": "Aspiradora 1",
            'ubication': 'Malaga',
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C218D2",
            "name": "Sopladora 1",
            'ubication': 'Malaga',
            coordinates:{
                lat: 36.7111006427816,
                lng: -4.433438829
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C1BDCB",
            "name": "Rotativa 2",
            'ubication': 'Sevilla CTT',
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C2D074",
            "name": "Aspiradora 2",
            'ubication': 'Sevilla CTT',
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C2B109",
            "name": "Sopladora 2",
            'ubication': 'Sevilla CTT',
            coordinates:{
                lat: 37.4086196534172,
                lng: -5.959022271
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C2AEC1",
            "name": "T290 1",
            'ubication': 'Alcorcón',
            coordinates:{
                lat: 40.3502746162539,
                lng: -3.831896599
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C1C206",
            "name": "T290 2",
            'ubication': 'Leganes',
            coordinates:{
                lat: 40.3286656743908,
                lng: -3.771186375
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C26613",
            "name": "T290 3",
            'ubication': 'El Pozo',
            coordinates:{
                lat: 40.3761326193531,
                lng: -3.656194488
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C26857",
            "name": "Nilfisk 1",
            'ubication': 'Villaverde BMI',
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C2AB4A",
            "name": "Nilfisk 2",
            'ubication': 'Villaverde BMI',
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C24C84",
            "name": "Nilfisk 3",
            'ubication': 'Villaverde BMI',
            coordinates:{
                lat: 40.3444389210696,
                lng: -3.679611939
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C261C3",
            "name": "Hidropresora 1",
            'ubication': 'Santa Catalina',
            coordinates:{
                lat: 40.3759421774773,
                lng: -3.68004721
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C25D6B",
            "name": "T290 4",
            'ubication': 'Piramides',
            coordinates:{
                lat: 40.4025125230714,
                lng: -3.711426433
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
        {
            "id": "C297E8",
            "name": "T290 5",
            'ubication': 'Villaverde Bajo',
            coordinates:{
                lat: 40.3517073171226,
                lng: -3.687507391
            },
            radius:500,
            fillColor: "#19E05B",
            strokeColor: "#E69150",
        },
    ]

    async getDevices(): Promise<any> {
        try {
            const { data } = await axios.get(`${API_URL}/devices`);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

const devicesServiceInstance = new deviceService();
export default devicesServiceInstance;
export const devicesList = devicesServiceInstance.devicesList;