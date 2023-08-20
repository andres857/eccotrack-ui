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
                <br>
                <span style="font-weight: bold;">coordenadas:</span> {{ deviceSelect.coordinates }}
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
                <Marker :options="{ position: { lat:deviceSelect.coordinates.lat, lng:deviceSelect.coordinates.lng }, icon: markerIcon }"/>
                </GoogleMap>
            </div>
            
            <div class="col-4">
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm"> # de ubicaciones </span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>
                <button type="button" class="btn btn-outline-primary">Calcular Onboarding</button>
                <button type="button" class="btn btn-outline-success">Guardar Onboarding</button>
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

            const markerIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';

            const listDevices = onMounted( async () => {
                const infoDevices = await LocationService.infoDevices();
                devices.value = infoDevices;
                console.log(devices.value);
            });

            const handleDeviceSelection = () => {
                console.log('Dispositivo seleccionado:', selectedDevice.value);
                const device = devices.value.find( device => selectedDevice.value === device.id);
            };

            const selectedDeviceName = computed(() => {
                const selectedDeviceObj = devices.value.find( device => device.id === selectedDevice.value );
                console.log('helloword', selectedDeviceObj);
                deviceSelect.value = selectedDeviceObj;
                return selectedDeviceObj ? selectedDeviceObj.name : 'Ninguno';
            });

            return{
                devices,
                listDevices,
                handleDeviceSelection,
                selectedDeviceName,
                selectedDevice,
                deviceSelect,
                markerIcon
            }
        },
    });
</script>