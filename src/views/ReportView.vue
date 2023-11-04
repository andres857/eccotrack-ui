<template>
  <!-- {{ devicesListReport }} -->
  <v-container >
    <v-row no-gutters>
      <v-col>
        <div id="report-table"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import LocationService from "@/services/LocationService";

export default defineComponent({
  setup() {
    onMounted( async () => {
      const arrayrta = await LocationService.devicesAtLocation();
      console.log('array  rta');
      console.log(arrayrta);
      console.log('array rta');
      
      new Tabulator('#report-table', {
        data: arrayrta,
        layout: "fitColumns",
        movableRows: true,
        groupBy: "location",
        paginationSize: 15,
        downloadRowRange: "all",
        pagination: "local",
        downloadConfig: {
          rowGroups: false
        },
        columns: [
          { title: "Location", field: "location" },
          { title: "Devices", field: "device" },
          { title: "status", field: "status", formatter:"tickCross" },
          { title: "Last seen", field: "lastSeen" },
        ],
      });
    });

    // return {
      
    // };
  }
});
</script>
