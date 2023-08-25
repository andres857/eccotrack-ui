<template>
    <!-- new filter view -->
    <v-container>
        <v-row justify="center" class="mt-4">
            <!-- filters search -->
            <v-col cols="4" class="mt-6">
                <v-select
                    v-model="selectedUbication"
                    :hint="`${selectedUbication}`"
                    :items="uniqueUbication"
                    label="Estacion"
                    variant="outlined"
                    @change="updateFilteredDevices(selectedUbication)"
                    persistent-hint
                    return-object
                    single-line
                ></v-select>    
            </v-col>
            <v-col cols="4">
                <div>
                    <label for="deviceDropdown">Dispositivos en la ubicación seleccionada:</label>
                    <select  class="custom-vuetify-select" id="deviceDropdown" v-model="selectedFilteredDevice">
                        <option v-for="device in filteredDevices" :key="device.id" :value="device.id">
                            {{ device.name }}
                        </option>
                    </select>
                    <p>Dispositivo seleccionado: {{ selectedFilteredDeviceName }}</p>
                    <!-- <v-select
                        v-model="selectedFilteredDevice"
                        :items="filteredDevices"
                        item-value="name"
                        label="Dispositivos en la ubicación seleccionada"
                        @change="handleDeviceSelection()"
                    ></v-select> -->
                </div>
            </v-col>
        </v-row>
        <!-- info device -->
        <v-row justify="center">
            <v-col cols="10">
                <!-- info device select -->
                <div v-if="deviceSelect" class="Device info">
                    <span style="font-weight: bold;" >Estado:</span> {{ deviceSelect.state }} |
                    <span style="font-weight: bold;">ID:</span> {{ deviceSelect.id }} |
                    <span style="font-weight: bold;">Device:</span> {{ deviceSelect.name }} |
                    <span style="font-weight: bold;">Visto por ultima vez: </span> {{ deviceSelect.lastSeen }} |
                    <span style="font-weight: bold;">Estacion:</span> {{ deviceSelect.ubication }}
                </div>
                <div v-else>
                    <span style="font-weight: bold;"> Seleccione un dispositivo para ver los detalles. </span>
                </div>
            </v-col>
        </v-row>
        <!-- MAPS view -->
        <v-row v-if="deviceSelect && deviceSelect.coordinates">
            <v-col cols="7">
                <GoogleMap 
                    api-key="AIzaSyAOUZ9OeINieyhHHLJL0nRIOfizXyyxr8E" 
                    style="width: 100%; height: 500px" 
                    :center="deviceSelect.coordinates" 
                    :zoom="13"
                >
                    <Circle :options="circleLocation" />

                    <Marker :options="{ position: { lat:deviceSelect.coordinates.lat, lng:deviceSelect.coordinates.lng }, icon: markerIcon }"/>
                    <Marker :options="{ position: { lat:OnboardingLocation.lat, lng:OnboardingLocation.lng }, icon: markerIconOnboardingLocation }"/>
                    <Marker :options="{ position: { lat:lastLocation.lat, lng:lastLocation.lng } }"/>
                    
                    <!-- marker history ubications device -->
                    <div v-for="(location, index) in historyLocations" :key="index">
                        <Marker :options="{ position: { lat: location.lat, lng: location.lng }, icon: markerIconLocations }">
                        </Marker>
                    </div>
                </GoogleMap>
            </v-col>
            <v-col cols="5">
                <v-row justify="start" class="mt-2">
                    <v-col cols="10">
                        <v-text-field
                            prepend-icon="mdi-pound" 
                            label="# de ubicaciones"
                            v-model="numberOfLocations"
                            @keyup.enter="historyLocation"
                            dense
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="start">
                    <v-col cols="6">
                        <v-btn  block rounded="xs" elevation="4" size="small" @click="historyLocation">Obtener localizaciones</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn block rounded="xs" elevation="4" size="small" @click="OnboardingLocationDevice">Calcular Onboarding</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" v-else>
            <v-col cols="4">
                <span>Esperando Dispositivo</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, onMounted, watch } from "vue";
    import { GoogleMap, Marker, Circle, InfoWindow } from "vue3-google-map";
    import  LocationService  from '../services/LocationService';

    export default defineComponent({
        components: { GoogleMap, Marker, Circle, InfoWindow },
        setup(){
            interface Device {
                id: any;
                name: any;
                ubication: any;
                coordinates: any;
                qualitySignal: any;
                state: string;
                lastSeen: string;
                onboardingLocation: boolean;
                onboardingCoordinates: any;
            }
            const devices = ref<Device[]>([]);
            const selectedDevice = ref([]);
            const deviceSelect = ref([]);

            // filter ubications
            const selectedUbication = ref(null);
            // filter devices
            const filteredDevices = ref([]);
            const selectedFilteredDevice = ref(null);

            
            // locations
            const OnboardingLocation = ref ('');
            const numberOfLocations = ref(25); // Valor predeterminado
            const historyLocations = ref([]);
            const lastLocation = ref('');

            const markerIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
            const markerIconOnboardingLocation = 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png';
            const markerIconLocations = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';

            const circleLocation = ref({
                center: { lat: 0, lng: 0 },
                radius: 1000,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#19E05B',
                strokeColor: '#E69150',
                fillOpacity: 0.2
            });

            const listDevices = onMounted( async () => {
                const infoDevices = await LocationService.infoDevices();
                devices.value = infoDevices;
                console.log(devices.value);
            });

            // filter dropdown ubications, get list ubications
            const uniqueUbication = computed(()=>{
                const uniqueUbicationsSet = new Set(devices.value.map(device => device.ubication));
                const uniqueUbications = [
                    ...uniqueUbicationsSet
                ]
                return uniqueUbications;
            })

            const handleUbicationSelection = () => {
                devices.value.find( (device: any) => {
                    device.ubication === selectedUbication.value;
                });
            };

            // filter para los devices
            const updateFilteredDevices = ( selectedUbication:any ) => {
                filteredDevices.value = devices.value.filter((device: any) => device.ubication === selectedUbication);
            };

            watch( selectedUbication, (newUbication) => {
                updateFilteredDevices(newUbication);
            });

            const selectedFilteredDeviceName = computed(() => {
                const selectedDeviceObj = filteredDevices.value.find(( device: any ) => device.id === selectedFilteredDevice.value);
                if (selectedDeviceObj) {
                    console.log('device select: ',selectedDeviceObj.id , selectedDeviceObj.coordinates);
                    deviceSelect.value = selectedDeviceObj;
                    circleLocation.value = {
                        ...circleLocation.value,
                        center: selectedDeviceObj.coordinates
                    }
                    return selectedDeviceObj ? selectedDeviceObj.name : 'Ninguno';
                } 
                return '';
            });

            // Obtener el # de locations para Onboarding
            const historyLocation =async () => {
                if (selectedDevice.value) {
                    console.log(selectedUbication.value,'opopo');
                    
                    historyLocations.value = await LocationService.locations(deviceSelect.value.id, numberOfLocations.value);
                    lastLocation.value = await LocationService.getLastLocation(deviceSelect.value.id);
                }
            }

            // Obtener la localizacion onboarding de un device 
            const OnboardingLocationDevice = async () => {
                if ( deviceSelect.value ) {
                    OnboardingLocation.value = await LocationService.getOnBoardingLocation(deviceSelect.value.id, numberOfLocations.value);
                }
            };

            return{
                devices,
                listDevices,
                // handleDeviceSelection,
                // selectedDeviceName,
                selectedDevice,
                deviceSelect,
                markerIcon,
                markerIconOnboardingLocation,
                markerIconLocations,
                circleLocation,
                OnboardingLocationDevice,
                OnboardingLocation,
                historyLocation,
                historyLocations,
                lastLocation,
                numberOfLocations,
                uniqueUbication,
                handleUbicationSelection,
                selectedUbication,
                updateFilteredDevices,
                selectedFilteredDeviceName,
                filteredDevices,
                selectedFilteredDevice
            }
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