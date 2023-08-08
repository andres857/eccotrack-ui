<template>
  <li class="flex items-center gap-2 border border-gray-200 rounded p-2 justify-around">
    <span>{{ deviceName }}</span>
    <span>{{ ubication }}</span>
  </li>
</template>
    
<script lang="ts">
  import { SignalIcon } from '@heroicons/vue/24/outline';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      SignalIcon,
    },
    props: {
      deviceName: String,
      ubication: String
    },
    setup(){
    },
  })
</script>