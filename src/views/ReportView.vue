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
      
      new Tabulator('#example-table', {
        data: devices,
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
          { title: "Location", field: "ubication" },
          { title: "Devices", field: "id" },
          { title: "status", field: "state", formatter:"tickCross" },
          { title: "Last seen", field: "lastSeen" },
        ],
      });
    });

    return {
      
    };
  }
});
</script>
