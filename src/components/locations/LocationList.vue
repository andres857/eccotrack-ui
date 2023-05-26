<!-- DeviceList.vue -->
<template>
    <div >
        <p> Lista locations</p>
    </div>
  </template>
    
  <script lang="ts">
      import LocationListItem from './LocationListItem.vue';
      import { LocationService } from '../../services/LocationService';
      import { defineComponent, onMounted } from 'vue';
  
      export default defineComponent({
        components: {
            LocationListItem,
        },
        setup(){
          
          onMounted( async ()=>{
            await LocationService.getLocationAllDevice();
          })
          return {
            LocationService
          }
        },
      })
  </script>  