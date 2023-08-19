<template>
  <div class="mt-3">
    <label for="deviceDropdown">Selecciona un dispositivo:</label>
    <select id="deviceDropdown" v-model="selectedDevice" @change="handleDeviceSelection">
      <option v-for="device in devicesList" :key="device" :value="device.id">
          {{ device.name }}
      </option>
    </select>
    <p>Has seleccionado: {{ selectedDeviceName }} con id {{ selectedDevice }}</p>
  </div>
  <div class="container-map mt-5">
    <GoogleMap 
      api-key="AIzaSyAOUZ9OeINieyhHHLJL0nRIOfizXyyxr8E" 
      style="width: 100%; height: 500px" 
      :center="center" 
      :zoom="15"
    >
      <Marker :options="{ position: { lat:coordinates.lat, lng:coordinates.lng } }" />
      <Marker :options="markerOptionsOnboarding" />
      <Marker :options="markerOptionsOnboarding1" />
      <Marker :options="markerOptionsOnboarding2" />

      <!-- Dibuja los circulos -->
      <Circle v-for="circle in circles" :options="circle" />
      <!-- Dibuja el nombre de la estacion dentro del circulo -->
      <div v-for="circle in circles">
        <InfoWindow :options="{ position: circle.center }"> {{circle.name}} </InfoWindow>
      </div>
    </GoogleMap>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { GoogleMap, Marker, Circle, InfoWindow } from "vue3-google-map";
  import { devicesList } from '../services/DeviceService';
  import  LocationService  from '../services/LocationService'
  
  export default defineComponent({
    components: { GoogleMap, Marker, Circle, InfoWindow },
    setup() {
        
        console.log(devicesList);
        const onboardingLocation = { lat: 37.40039409629661, lng: -5.957265401376357 };
        const markerOptionsOnboarding = { position: onboardingLocation, label: "C1BDCB", title: "LADY LIBERTY" };

        const onboardingLocation1 = { lat:  37.40057114262536, lng: -5.957495787128371 };
        const markerOptionsOnboarding1 = { position: onboardingLocation1, label: "C2D074", title: "LADY LIBERTY" };

        const onboardingLocation2 = { lat:  37.39902070386371, lng: -5.957778334637219 };
        const markerOptionsOnboarding2 = { position: onboardingLocation2, label: "C2B109", title: "LADY LIBERTY" };


        const selectedDevice = ref([]);
        const coordinates = ref('')
        const center = ref({ lat:40.4725097845423, lng:-3.682144767 })
        const circles = ref([]);
        circles.value = devicesList.map( (item:any) => ({
          name:item.ubication,
          center: item.coordinates,
          radius: 1000,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: item.fillColor,
          strokeColor: item.strokeColor,
          fillOpacity: 0.2,
        }));

        const handleDeviceSelection = () => {
          // Aquí puedes realizar llamadas a la API u otras acciones
          console.log('Dispositivo seleccionado:', selectedDevice.value);
          const device = devicesList.find( device => selectedDevice.value === device.id);
          coordinates.value = device.coordinates;
          center.value = coordinates.value
        };

        const markerOptions = computed(() => ({
          position: coordinates.value, // Usamos coordinates.value para que sea reactivo
        }));

        const selectedDeviceName = computed(() => {
          const selectedDeviceObj = devicesList.find( device => device.id === selectedDevice.value );
          return selectedDeviceObj ? selectedDeviceObj.name : 'Ninguno';
        });

        return { 
          center,
          circles,
          devicesList,
          selectedDevice,
          selectedDeviceName,
          handleDeviceSelection,
          markerOptions,
          coordinates,
          markerOptionsOnboarding,
          markerOptionsOnboarding1,
          markerOptionsOnboarding2
        };
    },
  });
</script>