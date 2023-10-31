<template>
  <!-- {{ devicesListReport }} -->
  <v-container >
    <v-row no-gutters>
      <v-col>
        <div id="example-table"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
1
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import LocationService from "@/services/LocationService";
import { TabulatorFull as Tabulator } from 'tabulator-tables';

export default defineComponent({
  setup() {
    onMounted( async () => {
      const devices = await LocationService.reportDevices();
      const arrayrta = await LocationService.deviceIsLocation();
      console.log('array  rta');
      console.log(arrayrta);
      console.log('array rta');
      
      new Tabulator('#example-table', {
        data: arrayrta,
        layout: "fitColumns",
        movableRows: true,
        groupBy: "ubication",
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

    return {
      
    };
  }
});
</script>
