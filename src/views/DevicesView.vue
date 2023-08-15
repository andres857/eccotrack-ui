<template>
    <br><br>
    <div class="container">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
                <distance></distance>
                <br><hr><br>
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
    import DeviceList from '../components/devices/DeviceList.vue';
    import distance from '../components/map/distance.vue';
    import {TabulatorFull as Tabulator} from 'tabulator-tables';
    import  LocationService  from '../services/LocationService'

    export default defineComponent({
        components:{
            DeviceList,
            distance
        },
        setup(){
        },
        data() {
            return {
                tabulator: null, //variable to hold your table
                
            }
        },
        async mounted() {
            const devices = await LocationService.generateTable();
            console.log("+++++++++ view location +++++++++++++");
            console.log(devices);
            console.log("+++++++++ view location +++++++++++++");
            //instantiate Tabulator when element is mounted
            this.tabulator = new Tabulator('#example-table', {
                data: devices,
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
                    { title:"Estado", field:"state"},
                    { title:"ID", field:"id"},
                    { title:"Estacion", field:"ubication"},
                    { title:"Nombre", field:"name", width:200},
                    { title:"Last seen", field:"lastSeen"},
                    { title:"rango", field: 'range'}
                ],
            });
        }
    });
</script>