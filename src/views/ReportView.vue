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
          { title: "Sede", field: "ubication" },
          { title: "ID", field: "id" },
          { title: "Nombre ID", field: "name", width: 200 },
          { title: "Estado", field: "state", formatter:"tickCross" },
          { title: "Last seen", field: "lastSeen" },
          { title: "Concentracion", field: 'concentracion', formatter:"tickCross" },
          { title: "Proximidad", field: 'proximidad', formatter:"tickCross" },
          { title: "Señal", field: 'qualitySignal', formatter:"tickCross" },
          { title: "Onboarding", field: 'onboarding', formatter:"tickCross" },
          { title: "Tracking", field: 'tracking', formatter:"tickCross" }
        ],
      });
    });

    return {
      
    };
  }
});
</script>
