<template>
    <GoogleMap api-key="AIzaSyB7mYteW4FfCNBbfZrb9KtTdSOzwMUjUqQ" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <Marker :options="{ position: center, icon:markerIcon }" />
        <Marker :options="{ position: p1 }" />
        <Marker :options="{ position: p2 }" />
        <Marker :options="{ position: p3 }" />
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

      const p1 = { lat: 40.55859704856543, lng: -3.6208563614134617 };
      const p2 = { lat: 40.58884143881601, lng: -3.5466484237762517 };
      const p3 = { lat: 40.55856077007627, lng: -3.6203361221221293 };
      
      const circleOptions = {
      center: center,
      radius: 300,
      strokeColor: "#9DC08B",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#9DC08B",
      fillOpacity: 0.35,
    };
      return { center,p1,p2,p3, circleOptions,markerIcon };
    },
  });
  </script>