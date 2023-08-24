<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        Dispositivos
      </v-col>
      <v-col cols="12" sm="4">
        Dispositivos
      </v-col>
      <v-col cols="12" sm="4">
        Dispositivos
      </v-col>
    </v-row>
  </v-container>

  <!-- {{ devicesListReport }} -->
  <v-container >
    <v-row no-gutters>
      <v-col>
        {{  devicesListReport }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, onMounted, watch } from "vue";
  import { devicesListReport } from '../services/DeviceService';

  export default defineComponent({
    components: {},
    setup(){

      // const devices = ref([]);

      // const reportDevices = onMounted( async () => {
      //   const infoDevices = await devicesListReport.infoDevices();
      //   devices.value = infoDevices;
      //   console.log(devices.value);
      // });
      return{
        devicesListReport,
      }
    }
  });

</script>