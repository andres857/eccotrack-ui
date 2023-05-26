<template>
    <div class="grid grid-cols-2 bg-slate-100">
      <div>
        <LocationList></LocationList>
      </div>
      <div class="flex justify-center items-center p-12">
        <Map></Map>
      </div>
    </div>
</template>
  
<script lang="ts">
  import Map from '../components/Map.vue';
  import LocationList from '../components/locations/LocationList.vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components:{
      LocationList
    }
  })
</script>
