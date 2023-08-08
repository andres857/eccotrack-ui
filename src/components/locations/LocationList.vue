<template>
    <div>
      <div v-if="!loading" class="bg-orange-100" >Cargando...</div>
        <ul v-else>
          <li class="flex items-center border border-gray-200 rounded p-2 justify-start">
            <span class="basis-44 ml-14">Nombre </span>
            <span class="basis-20 ml-20">Ubication</span>
          </li>
          <LocationListItem class="bg-slate-100"
            v-for="(location, index) in locations" :key="index"
            :deviceName="location.name"
            :ubication="location.lastUbication"
          />
        </ul>
    </div>
  </template>
    
  <script lang="ts">
      import LocationListItem from './LocationListItem.vue';
      import  LocationService  from '../../services/LocationService';
      import { defineComponent, onMounted, ref } from 'vue';
  
      export default defineComponent({
        components: {
            LocationListItem,
        },
        setup(){
          const locations = ref(null);
          let loading = ref(false); 

          onMounted( async ()=>{
            locations.value = await LocationService.getLocationAllDevice();
            console.log('------');
            console.log(locations.value);
            console.log('------');
            loading.value = true;
          })

          return {
            locations,
            loading
          }
        },
      })
  </script>  