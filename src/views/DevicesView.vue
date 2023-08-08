<template>
    <br><br>
    <div class="container">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
                <distance></distance>
                <br>
                <hr>
                <br>
                <h3>Dispositivos</h3>
                <div id="example-table"></div>
            </div>
        </div>
    </div>
    <!-- <div class="container mx-auto">
        <div class="flex flex-row flex-wrap my-2 gap-4 justify-center">
                <button
                @click="deviceStore.updateDevices" 
                class="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded">
                Actualizar lista de Dispositivos
                </button>
        </div>
        <div>
            {{ deviceStore.message }}
        </div>
        <div class="flex flex-row flex-wrap justify-center my-2 gap-4">
            <div class="basis-6/12 ">
                <DeviceList></DeviceList>
            </div>
        </div>
    </div> -->
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useDeviceStore } from '../stores/deviceStore';
    import DeviceList from '../components/devices/DeviceList.vue';
    import distance from '../components/map/distance.vue';
    import {TabulatorFull as Tabulator} from 'tabulator-tables';

    export default defineComponent({
        components:{
            DeviceList,
            distance
        },
        setup(){
            const deviceStore = useDeviceStore();
            function toRadians(degrees) {
                return degrees * (Math.PI / 180);
            }

            function calculateDistance(objet1, objet2, radio) {
                const earthRadius = 6371; // Radio de la Tierra en kilómetros
            
                // Convertir las coordenadas de grados a radianes
                const lat1Rad = toRadians(objet1.lat);
                const lat2Rad = toRadians(objet2.lat);
                const deltaLat = toRadians(objet2.lat - objet1.lat);
                const deltaLng = toRadians(objet2.lng - objet1.lng);
            
                // Calcular la fórmula de Haversine
                const a =
                Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = earthRadius * c;
            
                // Verificar si la distancia está dentro del radio especificado
                return distance <= radio;
            }  
            return { deviceStore }
        },
        data() {
            return {
                tabulator: null, //variable to hold your table
                tableData: [
                    {
                        "id": "C0E915",
                        "nameSigfox": "Grupo Electrogeno 1",
                        'ubication': 'Chamartin',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.470465111508645, lng: -3.710297586038538",
                    },
                    {
                        "id": "C24C84",
                        "nameSigfox": "Nilfisk 3",
                        'ubication': 'Villaverde BMI',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.39840995759872, lng: -3.6751569929780112",
                    },
                    {
                        "id": "C1BDCB",
                        "nameSigfox": "Rotativa 2",
                        'ubication': 'Sevilla CTT',
                        "status": 'NO OK',
                        "location_last_view": "lat: 37.41347744499228, lng: -5.924480965152867",
                    },
                    {
                        "id": "C25D6B",
                        "nameSigfox": "T290 4",
                        'ubication': 'Piramides',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.382375508498676, lng: -3.6639369956238954",
                    },
                    {
                        "id": "C261C3",
                        "nameSigfox": "Hidropresora 1",
                        'ubication': 'Santa Catalina',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.560453958519446, lng: -3.620483284241048",
                    },
                    {
                        "id": "C26613",
                        "nameSigfox": "T290 3",
                        'ubication': 'El Pozo',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.378875376490974, lng: -3.6657021658411506",
                    },
                    {
                        "id": "C2661D",
                        "nameSigfox": "Aspiradora 1",
                        'ubication': 'Malaga',
                        "status": 'NO OK',
                        "location_last_view": "lat: 36.7081141081928, lng: -4.441211323786497",
                    },
                    {
                        "id": "C26EEC",
                        "nameSigfox": "Grupo Electrogeno 6",
                        'ubication': 'Principe Pio',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.42026191608148, lng: -3.7227749597064066",
                    },
                    {
                        "id": "C26CBA",
                        "nameSigfox": "Trituradora 1",
                        'ubication': 'Toledo Sagra',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.102979903419865, lng: -3.897288565774035",
                    },
                    {
                        "id": "C26CB8",
                        "nameSigfox": "Hidropresora 2",
                        'ubication': 'Atocha',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.56020504210179, lng: -3.621439863028509",
                    },
                    {
                        "id": "C26EE9",
                        "nameSigfox": "Rotativa 1",
                        'ubication': 'Malaga',
                        "status": 'NO OK',
                        "location_last_view": "lat: 36.70781090909091, lng: -4.442461818181818",
                    },
                    {
                        "id": "C26EF2",
                        "nameSigfox": "Grupo Electrogeno 7",
                        'ubication': 'Villalba',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.634998923708324, lng: -3.9951673672934076",
                    },
                    {
                        "id": "C28F15",
                        "nameSigfox": "AFS23SP [1]00C28F15",
                        'ubication': '',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.58834323993077, lng: -4.1322659708424885",
                    },
                    {
                        "id": "C297E8",
                        "nameSigfox": "T290 5",
                        'ubication': 'Villaverde Bajo',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.55857354822076, lng: -3.6226260123669296",
                    },
                    {
                        "id": "C2AEC1",
                        "nameSigfox": "T290 1",
                        'ubication': 'Alcorcón',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.38008844842232, lng: -3.6640771580180225",
                    },
                    {
                        "id": "C2AB4A",
                        "nameSigfox": "Nilfisk 2",
                        'ubication': 'Villaverde BMI',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.559521533003, lng: -3.621226409071651",
                    },
                    {
                        "id": "C2AA7C",
                        "nameSigfox": "Grupo Electrogeno 3",
                        'ubication': 'Alcala de Henares',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.46764515344495, lng: -3.7205628209821864",
                    },
                    {
                        "id": "C2B109",
                        "nameSigfox": "Sopladora 2",
                        'ubication': 'Sevilla CTT',
                        "status": 'NO OK',
                        "location_last_view": "lat: 37.39913569704921, lng: -5.958037505671236",
                    },
                    {
                        "id": "C2CF85",
                        "nameSigfox": "Grupo Electrogeno 5",
                        'ubication': 'Guadalajara',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.630922371474256, lng: -3.137730913109473",
                    },
                    {
                        "id": "C2D074",
                        "nameSigfox": "Aspiradora 2",
                        'ubication': 'Sevilla CTT',
                        "status": 'NO OK',
                        "location_last_view": "lat: 37.393120145238804, lng: -5.967857770051227",
                    },
                    {
                        "id": "C2D03F",
                        "nameSigfox": "NO FUNCIONA",
                        'ubication': 'NO FUNCIONA',
                        "status": 'NO OK',
                        "location_last_view": "NO FUNCIONA",
                    },
                    {
                        "id": "C2247B",
                        "nameSigfox": "Grupo Electrogeno 2",
                        'ubication': 'Chamartin',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.47668377501853, lng: -3.667759878294373",
                    },
                    {
                        "id": "C218D2",
                        "nameSigfox": "Sopladora 1",
                        'ubication': 'Malaga',
                        "status": 'NO OK',
                        "location_last_view": "lat: 36.70941400968609, lng: -4.438170006407945",
                    },
                    {
                        "id": "C1C206",
                        "nameSigfox": "T290 2",
                        'ubication': 'Leganes',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.39946930385112, lng: -3.6736613672465994",
                    },
                    {
                        "id": "C26857",
                        "nameSigfox": "Nilfisk 1",
                        'ubication': 'Villaverde BMI',
                        "status": 'NO OK',
                        "location_last_view": "lat: 40.559358146348714, lng: -3.62132414472868",
                    },
                ],
            }
        },
        mounted() {
            //instantiate Tabulator when element is mounted
            this.tabulator = new Tabulator('#example-table', {
                data: this.tableData,
                layout:"fitColumns",
                movableRows:true,
                groupBy:"ubication",
                paginationSize: 15,
                downloadRowRange: "all",
                pagination: "local",
                downloadConfig: {
                    rowGroups: false
                },
                columns:[
                    { title:"ID", field:"id"},
                    { title:"Nombre", field:"nameSigfox", width:200},
                    { title:"Estacion", field:"ubication"},
                    { title:"Ultima ubicacion", field:"location_last_view"},
                    { title:"Estado - Geolocalización", field:"status"},
                    { title:"No Visto", field:"show"},
                ],
            });
        }
    });
</script>