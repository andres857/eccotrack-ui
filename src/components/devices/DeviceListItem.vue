<template>
  <li class="flex items-center gap-2 border border-gray-200 rounded p-2 justify-around">
    <span :class="`h-6 w-6  ${comStateClass} rounded-full inline-flex items-center justify-center`">
      <SignalIcon class="h-4 w-4 text-white" />
    </span>
    <span>{{ deviceName }}</span>
    <span> {{ lqi }} </span>
    <span>{{ lastCom }}</span>
  </li>
</template>
  
<script lang="ts">
  import { SignalIcon } from '@heroicons/vue/24/outline';
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    components: {
      SignalIcon,
    },
    props: {
      comState: Number,
      deviceName: String,
      lqi: String,
      lastCom: Number
    },
    setup(props){
      const comStateClass = computed(()=>{
          switch (props.comState) {
          case 1:
            return 'bg-green-500';
          case 3:
            return 'bg-red-500';
          default:
            return 'bg-gray-500';
        }
      })
      return {
          comStateClass
      }
    },

  })
</script>