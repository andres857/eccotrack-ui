<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navbar" style="background-color: #e3f2fd;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/clients">Clients</RouterLink>
        <RouterLink to="/devices">Devices</RouterLink>
        <RouterLink to="/locations">Locations</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>



