<template>
    <div class="container mx-auto">
        <div class="flex flex-row flex-wrap my-2 gap-4 justify-center">
                <button class="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded">
                Actualizar
                </button>
        </div>

        <div class="flex flex-row flex-wrap justify-center my-2 gap-4">
            <div class="basis-6/12 ">
                <DeviceList></DeviceList>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import DeviceList from '../components/DeviceList.vue'
</script>