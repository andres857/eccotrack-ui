<template>
    <GoogleMap
      api-key='AIzaSyAOUZ9OeINieyhHHLJL0nRIOfizXyyxr8E'
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="13"
    >
      <!-- circles map -->
      <Circle v-for="circle in circles" :options="circle" />
      <div v-for="circle in circles">
        <InfoWindow :options="{ position: circle.center }"> {{circle.name}} </InfoWindow>
      </div>
      <!-- marker ubications -->
      <div v-if="coordenadas.length > 0" v-for="(ubication, index) in coordenadas" :key="index">
        <div v-if="ubication.ubication">
          <Marker :options="{ position: { lat: ubication.ubication.lat, lng: ubication.ubication.lng } }">
            <InfoWindow>      
              <div>helloword</div>
            </InfoWindow>
          </Marker>
        </div>
      </div>
      <div>
          <!-- {{ coordenadas }} -->
      </div>
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from "vue";
  import { GoogleMap, Circle, Marker, InfoWindow, CustomControl } from "vue3-google-map";
  import LocationService from '../../services/LocationService';
  
  
  export default defineComponent({
    components: { GoogleMap, Circle, Marker,InfoWindow,CustomControl },
        // props:{
        // locations:{
        //   type: Array,
        //   required: true
        // }
      // }
    setup() {
      const center = { lat: 40.5590682, lng: -3.6236133 }
      const markerIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
      const locations = ref([
        {
          name: 'scheneider Electric',
          coordinates: {
            lat: 40.5590682,
            lng: -3.6236133,
          },
          radius:2000,
          fillColor: "#4499FA",
          strokeColor: "#E69150",
        },
      ]);

      const circles = ref([]);
      const coordenadas = ref([]);
      circles.value = locations.value.map(item => ({
        name:item.name,
        center: item.coordinates,
        radius: item.radius,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: item.fillColor,
        strokeColor: item.strokeColor,
        fillOpacity: 0.2,
      }));
  
      onMounted( async ()=>{
        // coordenadas.value = await LocationService.getCoordenadas();
        // console.log(coordenadas.value);
      })
      return { 
        center, 
        circles, 
        markerIcon,
        coordenadas,
      };
    },
  });
  </script>
