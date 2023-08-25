<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="green" dark>
      <!-- En Vuetify, el centro de texto y otros estilos comunes ya están integrados en los componentes. -->
      <v-spacer></v-spacer> <!-- Centrar elementos en el app-bar -->
      <!-- <v-btn text :to="/">Home</v-btn> -->
      <v-btn text :to="'/devices'">Devices</v-btn>
      <v-btn text :to="'/onboarding'">Onboarding</v-btn>
      <v-btn text :to="'/onboarding-device'">Onboarding Device</v-btn>
      <v-btn text :to="'/report'">Report</v-btn>
      <!-- <v-btn text :to="/locations">Locations</v-btn> -->
      <v-spacer></v-spacer> <!-- Centrar elementos en el app-bar -->
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>