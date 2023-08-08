import { defineStore } from 'pinia';
import DeviceService from '../services/DeviceService';

export const useDeviceStore = defineStore({
    id: 'deviceStore',
    state: () => ({
        devices: [],
        loading: true,
        message: ''
    }),
    actions: {
        updateDates() {
            const now = new Date();   
            this.devices.forEach(element => {
                let lastCom = new Date(element.lastCom);
                let differenceInMilliseconds = now.getTime() - lastCom.getTime();                
                let differenceInMinutes = differenceInMilliseconds / (1000 * 60);

                if (differenceInMinutes > 1440) {
                    let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
                    element.differenceTime = `${Math.round(differenceInDays)} dias`;
                } else if(differenceInMinutes < 60){
                    element.differenceTime = `${Math.round(differenceInMinutes)} minutos`;
                }else {                    
                    let differenceInhours = differenceInMilliseconds / (1000 * 60 * 60);
                    element.differenceTime = `${Math.round(differenceInhours)} horas`;
                }
            });
        },
        async fetchDevices() {
            this.devices = await DeviceService.getAllDevices();
            this.updateDates(); 
            this.loading = false;
        },
        async updateDevices() {
            const rta = await DeviceService.updateListDevices();
            if (rta === ''){
                this.message = 'No hay dispositivos Nuevos';
                this.loading = false;
            }else{
                this.devices = rta;
                this.updateDates();
                this.message = 'Dispositivos actualizados';
                this.loading = false;
            }
        }
    }
});