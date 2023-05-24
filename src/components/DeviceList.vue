<!-- DeviceList.vue -->
<template>
  <div >
    <div v-if="deviceStore.loading" class="bg-orange-100" >Cargando...</div>
    <ul v-else>
        <li class="flex items-center border border-gray-200 rounded p-2 justify-start">
          <span class="basis-20 ml-6">Conexion</span>
          <span class="basis-44 ml-14">Nombre del Dispositivo</span>
          <span class="basis-8 ml-16"> LQI </span>
          <span class="basis-20 ml-20">Last seen</span>
        </li>
        <DeviceListItem class="bg-slate-100"
          v-for="(device, index) in deviceStore.devices" :key="index"
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
    import { useDeviceStore } from '../stores/deviceStore'
    import { defineComponent, onMounted } from 'vue';

    export default defineComponent({
      components: {
          DeviceListItem,
      },
      setup(){
        const deviceStore = useDeviceStore();
        
        onMounted( async ()=>{
          await deviceStore.fetchDevices();
        })
        return {deviceStore}
      },
    })
</script>  