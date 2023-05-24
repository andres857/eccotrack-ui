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
            this.devices.forEach( element => {
                let lastCom = new Date( element.lastCom)
                let differenceInMilliseconds = now.getTime() - lastCom.getTime();
                let differenceInhours = differenceInMilliseconds / ( 1000 * 60 * 60);
                element.lastCom = Math.round(differenceInhours);
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
