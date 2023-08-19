<template>
  <GoogleMap
    api-key="AIzaSyAOUZ9OeINieyhHHLJL0nRIOfizXyyxr8E"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="14"
  >
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="sayHi">👋</button>
    </CustomControl>
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
  </GoogleMap>
</template>

<script>
import dotenv from 'dotenv';
import { defineComponent, ref, onMounted } from "vue";
import { GoogleMap, Circle, Marker, InfoWindow, CustomControl } from "vue3-google-map";
import LocationService from '../services/LocationService';


export default defineComponent({
  components: { GoogleMap, Circle, Marker,InfoWindow,CustomControl },
      // props:{
      // locations:{
      //   type: Array,
      //   required: true
      // }
    // }
  setup() {
    const center = { lat: 40.5590682, lng: -3.6236133 } //madrid coordenadas
    // const center = { lat: 40.4165000, lng: -3.7025600 }; //madrid coordenadas
    const markerIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
    
    const locations = ref([
      {
        name: 'Chamartin',
        coordinates: {
          lat: 40.4725097845423,
          lng: -3.682144767,
        },
        radius:500,
        fillColor: "#19E05B",
        strokeColor: "#E69150",
      },
      {
        name: 'Alcala de Henares',
        coordinates: {
          lat: 40.4894717968370,
          lng: -3.365457714,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'El Escorial',
        coordinates: {
          lat:40.5852864961765,
          lng:-4.132255414,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Guadalajara',
        coordinates: {
          lat:40.6439772144758,
          lng:-3.182267588,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Principe Pio',
        coordinates: {
          lat:40.4205141003862,
          lng:-3.719563008,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Villalba',
        coordinates: {
          lat:40.6264955543625,
          lng:-4.008038572,
        },
        fillColor: "#FC4CDC",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Malaga',
        coordinates: {
          lat:36.7111006427816,
          lng:-4.433438829,
        },
        fillColor: "#FC4CDC",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Sevilla CTT',
        coordinates: {
          lat:37.4086196534172,
          lng:-5.959022271,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Toledo Sagra',
        coordinates: {
          lat: 39.9593106554009,
          lng:-3.84657849,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Alcorcón',
        coordinates: {
          lat: 40.3502746162539,
          lng: -3.831896599,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Leganes',
        coordinates: {
          lat: 40.3286656743908,
          lng: -3.771186375,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'El Pozo',
        coordinates: {
          lat: 40.3761326193531,
          lng:-3.656194488,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Villaverde BMI',
        coordinates: {
          lat:40.3444389210696,
          lng:-3.679611939,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Santa Catalina',
        coordinates: {
          lat:40.3759421774773,
          lng:-3.68004721,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Atocha',
        coordinates: {
          lat:40.4056219333573,
          lng:-3.689039174,
        },
        fillColor: "#FC4CDC",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Piramides',
        coordinates: {
          lat:40.4025125230714,
          lng:-3.711426433,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
      {
        name: 'Villaverde Bajo',
        coordinates: {
          lat:40.3517073171226,
          lng:-3.687507391,
        },
        fillColor: "#19E05B",
        strokeColor: "#E69150",
        radius:500,
      },
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
    const sayHi = () => alert("Hi!");

    onMounted(async ()=>{
      // coordenadas.value = await LocationService.getCoordenadas();
      // console.log(coordenadas.value);
    })
    return { 
      center, 
      circles, 
      markerIcon,
      coordenadas,
      sayHi
    };
  },
});
</script>
<style scoped>
.custom-btn {
  box-sizing: border-box;
  background: white;
  height: 40px;
  width: 40px;
  border-radius: 2px;
  border: 0px;
  margin: 10px;
  padding: 0px;
  font-size: 1.25rem;
  text-transform: none;
  appearance: none;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  overflow: hidden;
}
</style>