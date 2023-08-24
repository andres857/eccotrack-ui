<template>
    <!-- new filter view -->
    <div>
    <div class="row">
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
        <!-- <p>Ubicación seleccionada: {{ selectedUbication }}</p> -->
    </div>
        <!-- dropdown devices  -->
        <div>
            <label for="deviceDropdown">Dispositivos en la ubicación seleccionada:</label>
            <select id="deviceDropdown" v-model="selectedFilteredDevice">
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
            <!-- botones view -->
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