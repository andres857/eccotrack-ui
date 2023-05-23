<template>
    <div class="container mx-auto bg-white text-black">
      <ul class="list-none space-y-2">
        <li class="flex items-center space-x-2 border border-gray-200 rounded p-2">
          <span class="h-6 w-6 bg-green-500 rounded-full inline-flex items-center justify-center">
            <SignalIcon class="h-4 w-4 text-white" />
          </span>
          <span>Sensor1 - Estacion 1</span>
        </li>
        <!-- Repite para los otros sensores -->
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { SignalIcon } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      SignalIcon,
    },
    // ...resto de tu código Vue/TypeScript
  }
  </script>
  