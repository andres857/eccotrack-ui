<template>
    <div class="grid grid-cols-1 bg-slate-100">
      <Map/>
    </div>
</template>
  
<script lang="ts">
  import Map from '../components/Map.vue';
  import  LocationService  from '../services/LocationService'
  import { defineComponent, onMounted, ref } from 'vue';
  
  export default defineComponent({
    components:{
      Map
    },
    setup(){
      const devices = ref(null);
      onMounted( async ()=>{    
            const devices = await LocationService.infoDevices();
            console.log("+++++++++ view location +++++++++++++");
            console.log(devices);
            console.log("+++++++++ view location +++++++++++++");
          })
      return {
        devices
      }
    },
  })
</script>
