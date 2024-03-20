import axios from 'axios';

const API_URL = 'http://34.32.8.41:3000';

class ClientService {
    async crearCliente(client: any): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/clients`, client);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async obtenerClientes(): Promise<any> {
        try {
            const response = await axios.get(`${API_URL}/clients`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }    
}

export default new ClientService();