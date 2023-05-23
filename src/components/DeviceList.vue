<!-- DeviceList.vue -->
<template>
  <div >
    <div v-if="loading" class="bg-orange-100" >Cargando...</div>
    <ul v-else>
        <li class="flex items-center border border-gray-200 rounded p-2 justify-start">
          <span class="basis-20 ml-6">Conexion</span>
          <span class="basis-44 ml-14">Nombre del Dispositivo</span>
          <span class="basis-8 ml-16"> LQI </span>
          <span class="basis-20 ml-20">Last seen</span>
        </li>
        <DeviceListItem class="bg-slate-100"
          v-for="(device, index) in devices" :key="index"
          :comState="device.comState"
          :deviceName="device.name"
          :lqi="device.lqi"
          :lastCom="device.lastCom"
        />
    </ul>
  </div>
</template>
  
<script lang="ts">
    import DeviceListItem from './DeviceListItem.vue'
    import DeviceService from '../services/DeviceService'
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: {
        DeviceListItem,
    },
    data() {
        return {
        devices: [],
        loading: true,
        error: null,
        }
    },
    async mounted() {
        this.devices = await DeviceService.getAllDevices();
        const now = new Date(); 
        this.devices.forEach(element=>{
          let lastCom = new Date(element.lastCom)
          let differenceInMilliseconds = now.getTime() - lastCom.getTime();
          let differenceInhours = differenceInMilliseconds / (1000 * 60 * 60);
          element.lastCom = Math.round(differenceInhours);
        })
        this.loading = false;
    },
    })
</script>  