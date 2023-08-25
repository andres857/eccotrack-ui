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

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { devicesListReport } from '../services/DeviceService';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

export default defineComponent({
  setup() {
    onMounted(() => {
      new Tabulator('#example-table', {
        data: devicesListReport,
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
          { title: "Estacion", field: "ubication" },
          { title: "ID", field: "id" },
          { title: "Nombre", field: "name", width: 200 },
          { title: "Conectado", field: "", formatter:"tickCross" },
          { title: "Last seen", field: "" },
          { title: "Concentracion", field: 'concentracion', formatter:"tickCross" },
          { title: "Proximidad", field: 'proximidad', formatter:"tickCross" },
          { title: "Señal", field: 'qualitySiganl', formatter:"tickCross" },
          { title: "Onboarding", field: 'onboarding', formatter:"tickCross" },
          { title: "Tracking", field: '', formatter:"tickCross" }
        ],
      });
    });

    return {
      devicesListReport,
    };
  }
});
</script>
