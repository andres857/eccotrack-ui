<template>
    <div class="container mx-auto">
        <div class="flex flex-row flex-wrap my-2 gap-4 justify-center">
                <button
                @click="deviceStore.updateDevices" 
                class="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded">
                Actualizar lista de Dispositivos
                </button>
        </div>
        <div>
            {{ deviceStore.message }}
        </div>
        <div class="flex flex-row flex-wrap justify-center my-2 gap-4">
            <div class="basis-6/12 ">
                <DeviceList></DeviceList>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import DeviceList from '../components/DeviceList.vue'
    import { useDeviceStore } from '../stores/deviceStore'

    export default defineComponent({
        components:{
            DeviceList
        },
        setup(){
            const deviceStore = useDeviceStore();
            return { deviceStore }
        }
    })

    
</script>