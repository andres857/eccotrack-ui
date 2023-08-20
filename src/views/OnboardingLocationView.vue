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
      
      <!-- marker ubications -->
      <div v-for="(device, index) in devices" :key="index">
          <Marker :options="{ position: { lat: device.onboardingCoordinates.lat, lng: device.onboardingCoordinates.lng } }">
          <InfoWindow>      
            <div>
              <span style="font-weight: bold;">ID: </span> {{ device.id }}
            </div>
            <div>
              <span style="font-weight: bold;">Device: </span> {{ device.name }}
            </div>
            <div>
              <span style="font-weight: bold;">Estacion: </span> {{ device.ubication }}
            </div>
          </InfoWindow>
        </Marker>
      </div>

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
  import { defineComponent, ref, computed, onMounted, watch } from "vue";
  import { GoogleMap, Marker, Circle, InfoWindow } from "vue3-google-map";
  import { devicesList } from '../services/DeviceService';
  import  LocationService  from '../services/LocationService'
  
  export default defineComponent({
    components: { GoogleMap, Marker, Circle, InfoWindow },
    setup() {
      // obtiene los Objetos reactivos
        const devices = ref([]);
        const circles = ref([]);

        const listDevices = onMounted( async () => {
          const infoDevices = await LocationService.infoDevices();
          devices.value = infoDevices;
          console.log(devices.value);

          circles.value = devices.value.map( (item:any) => ({
              name: item.ubication,
              center: item.coordinates,
              radius: 1000,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#19E05B',
              strokeColor: '#E69150',
              fillOpacity: 0.2
          }));
        });

        const selectedDevice = ref([]);
        const coordinates = ref('')
        const center = ref({ lat:40.4725097845423, lng:-3.682144767 })

        const handleDeviceSelection = () => {
          // Aquí puedes realizar llamadas a la API u otras acciones
          console.log('Dispositivo seleccionado:', selectedDevice.value);
          const device = devicesList.find( device => selectedDevice.value === device.id);
          coordinates.value = device.coordinates;
          center.value = coordinates.value;
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
          devices,
          devicesList,
          selectedDevice,
          selectedDeviceName,
          handleDeviceSelection,
          markerOptions,
          coordinates,
          listDevices
        };
    },
  });
</script>