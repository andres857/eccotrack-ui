<template>
  <v-container class="mt-5">
    <v-row justify="center">

      <v-col cols="4" class="mt-1">
        <label for="deviceDropdown">Selecciona un dispositivo:</label>
        <select class="custom-vuetify-select" id="deviceDropdown" v-model="selectedDevice" @change="handleDeviceSelection">
          <option v-for="device in devicesList" :key="device" :value="device.id">
              {{ device.name }}
          </option>
        </select>
        <!-- <p>Has seleccionado: {{ selectedDeviceName }} con id {{ selectedDevice }}</p> -->

        <!-- <v-select
          label="Selecciona un dispositivo"
          v-model="selectedDevice"
          :items="devicesList"
          item-text="name"
          item-value="id"
          @change="handleDeviceSelection"
        ></v-select> -->
      </v-col>

      <v-col cols="6">
        <GoogleMap 
          api-key="AIzaSyAOUZ9OeINieyhHHLJL0nRIOfizXyyxr8E" 
          style="width: 100%; height: 500px" 
          :center="center" 
          :zoom="12"
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
      </v-col>
    </v-row>
  </v-container>

</template>
  
<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue";
  import { GoogleMap, Marker, Circle, InfoWindow } from "vue3-google-map";
  import { devicesList } from '../services/DeviceService';
  import  LocationService  from '../services/LocationService';
  
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

<style>
  .custom-vuetify-select {
      width: 100%;
      height: 56px; /* Altura general de Vuetify para campos de texto y select */
      border: 1px solid #ccc; /* Borde general */
      border-radius: 4px; /* Bordes redondeados */
      padding: 12px 16px; /* Espaciado interno para texto y dropdown */
      font-size: 16px; /* Tamaño de letra general */
      transition: border 0.2s; /* Transición suave para el borde */
      box-sizing: border-box; /* Asegurar que el padding y el borde no sumen al tamaño total */
      appearance: none; /* Remover estilización por defecto en algunos navegadores */
      background-color: #fff;
      position: relative;
  }

  .custom-vuetify-select:focus {
      border-color: #1976d2; /* Cambia el color del borde al color primario de Vuetify cuando está enfocado */
      outline: none; /* Remover el contorno por defecto del navegador */
  }

  /* Estilo para la flecha de dropdown */
  .custom-vuetify-select::after {
      content: '\25BC'; /* Flecha hacia abajo */
      font-size: 12px;
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none; /* Asegurarse de que no interfiera con clics */
  }
</style>