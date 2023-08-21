<template>
    <div class="container">
        <div class="row">
            <div class=" col-6 mt-3">
                <label for="deviceDropdown">Selecciona un dispositivo:</label>
                <select id="deviceDropdown" v-model="selectedDevice" @change="handleDeviceSelection">
                    <option v-for="device in devices" :key="device" :value="device.id">
                        {{ device.name }}
                    </option>
                </select>
                <p>Has seleccionado: {{ selectedDeviceName }} con id {{ selectedDevice }}</p>
            </div>
            <div v-if="deviceSelect" class="Device info">
                <span style="font-weight: bold;" >Estado:</span> {{ deviceSelect.state }}
                <span style="font-weight: bold;">ID:</span> {{ deviceSelect.id }}
                <span style="font-weight: bold;">Device:</span> {{ deviceSelect.name }}
                <span style="font-weight: bold;">Visto por ultima vez: </span> {{ deviceSelect.lastSeen }}
                <span style="font-weight: bold;">Estacion:</span> {{ deviceSelect.ubication }}
            </div>
            <div v-else>
                Seleccione un dispositivo para ver los detalles.
            </div>
        </div>
    </div>
    <!-- map zone -->
    <div v-if="deviceSelect && deviceSelect.coordinates" class="container mt-5">
        <div class="row" >
            <div class="col-8">
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
            </div>
            <div class="col-4">
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm"> # de ubicaciones </span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                           v-model="numberOfLocations"
                           @keyup.enter="historyLocation"
                    >
                </div>
                <button @click="historyLocation" type="button" class="btn btn-outline-success">Obtener localizaciones</button>
                <button type="button" class="btn btn-outline-primary" @click="OnboardingLocationDevice">Calcular Onboarding</button>
                <button type="button" class="btn btn-outline-success">Guardar Ubicacion</button>
            </div>
        </div>
    </div>
    <div v-else>
        buscando
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, onMounted, watch } from "vue";
    import { GoogleMap, Marker, Circle, InfoWindow } from "vue3-google-map";
    import  LocationService  from '../services/LocationService';

    export default defineComponent({
        components: { GoogleMap, Marker, Circle, InfoWindow },
        setup(){
            const devices = ref([]);
            const selectedDevice = ref([]);
            const deviceSelect = ref([]);
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

            const handleDeviceSelection = () => {
                const device = devices.value.find( device => selectedDevice.value === device.id);
                console.log('Dispositivo seleccionado:', selectedDevice.value);
            };
            
            // Obtener el # de locations para Onboarding
            const historyLocation =async () => {
                if (selectedDevice.value) {
                    historyLocations.value = await LocationService.locations(selectedDevice.value, numberOfLocations.value);
                    lastLocation.value = await LocationService.getLastLocation(selectedDevice.value);
                }
            }

            // Obtener la localizacion onboarding de un device 
            const OnboardingLocationDevice = async () => {
                if ( selectedDevice.value ) {
                    OnboardingLocation.value = await LocationService.getOnBoardingLocation(selectedDevice.value, numberOfLocations.value);
                }
            };

            const selectedDeviceName = computed(() => {
                const selectedDeviceObj = devices.value.find( device => device.id === selectedDevice.value );
                if (selectedDeviceObj) {
                    console.log('device select: ',selectedDeviceObj.id , selectedDeviceObj.coordinates);
                    deviceSelect.value = selectedDeviceObj;
                    circleLocation.value = {
                        ...circleLocation.value,
                        center: selectedDeviceObj.coordinates
                    }
                    return selectedDeviceObj ? selectedDeviceObj.name : 'Ninguno';
                } 
            });

            return{
                devices,
                listDevices,
                handleDeviceSelection,
                selectedDeviceName,
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
            }
        },
    });
</script>