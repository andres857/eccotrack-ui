<template>
    <div class="grid grid-cols-1 bg-slate-100">
      <Map/>
    </div>
    <div>
      <distance></distance>
    </div>
</template>
  
<script lang="ts">
  import Map from '../components/Map.vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components:{
      Map
    },
    setup(){
    },
  })
</script>
