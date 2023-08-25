<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="4">
                <!-- <distance></distance> -->
                <h3>Dispositivos</h3>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10">
                <div id="example-table"></div>
            </v-col>
        </v-row>
    </v-container>
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
            const devices = await LocationService.infoDevices();
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
                    { title:"rango", field: 'onboardingLocation'}
                ],
            });
        }
    });
</script>