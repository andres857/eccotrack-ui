<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="bg-green-600 text-center py-3">
    <nav class="grid grid-cols-4 gap-4 justify-center items-center">
      <RouterLink to="/" class="text-white font-medium hover:text-gray-300">Home</RouterLink>
      <RouterLink to="/clients" class="text-white font-medium hover:text-gray-300">Clients</RouterLink>
      <RouterLink to="/devices" class="text-white font-medium hover:text-gray-300">Devices</RouterLink>
      <RouterLink to="/locations" class="text-white font-medium hover:text-gray-300">Locations</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>



