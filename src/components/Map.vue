<template>
    <GoogleMap api-key="AIzaSyAk1H63La1EIAUzIm_dSdXZ1w1mM3KCwOc" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <Marker :options="{ position: center, icon:markerIcon }" />
        <Marker :options="{ position: p1 }" />
        <Marker :options="{ position: p2 }" />
        <Marker :options="{ position: p3 }" />
        <Marker :options="{ position: p4 }" />
        <Marker :options="{ position: p5 }" />
        <Marker :options="{ position: p6 }" />
        <Marker :options="{ position: p7 }" />
        <Marker :options="{ position: p8 }" />

        <Circle :options="circleOptions" />
    </GoogleMap>
  </template>
  
  <script >
  import { defineComponent } from "vue";
  import { GoogleMap, Marker,Circle } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker, Circle },
    setup() {
      const center = { lat: 40.5590682, lng: -3.6236133 };
      const markerIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';

      const p1 = { lat: 40.55991806915234, lng: -3.6205513915354897 };
      const p2 = { lat: 40.560119765672496, lng: -3.6211568486346084 };
      const p3 = { lat: 40.55894602120704, lng: -3.620528841389405 };
      const p4 = { lat: 40.559671123523636, lng: -3.6209285719697375 };
      const p5 = { lat: 40.56011385840393, lng: -3.6205552613793306 };
      const p6 = { lat: 40.55973593273068, lng: -3.6211235356338545 };
      const p7 = { lat: 40.55969393707302, lng: -3.6197153612932937 };
      const p8 = { lat: 40.56032872700779, lng: -3.620448015868286 };

      const circleOptions = {
      center: center,
      radius: 500,
      strokeColor: "#9DC08B",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#9DC08B",
      fillOpacity: 0.35,
    };
      return { center,p1,p2,p3,p4,p5,p6,p7,p8, circleOptions,markerIcon };
    },
  });
  </script>