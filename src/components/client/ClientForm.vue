<template>
  <div class="container mx-auto flex flex-row flex-wrap bg-pink-500 gap-4 justify-center">
    <div class="bg-green-500 basis-28">01</div>
  </div>

  <div class="row">
    <div class="col-8">
      <h4>Nombre cliente</h4>
    </div>
    <div class="col-12">
      <form @submit.prevent="createClient">
        <div class="row">
          <div class="col-8">
            <input v-model="newClient.name" 
                  id="company-name"
                  class="form-control form-control-sm" 
                  type="text" 
                  placeholder="Nombre del cliente" 
                  aria-label=".form-control-sm example" 
                  required>
          </div>
          <div class="col-4">
            <button type="submit" class="submit-button">Crear</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <button @click="getClients()">listar Clients</button>
      <div v-for="(client, index) in clients" :key="client">
        {{ client.name }} - {{client.contact[0].name}}  <br>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import ClientService from '../../services/ClientService';

export default {
  data() {
    return {
      newClient: {
        name: '',
        contact: [
          {
            name: '',
            lastname: '',
            position: '',
            area: '',
            email: '',
            phone: ''
          }
        ]
      },
      clients:[]
    };
    },
    methods: {
      async createClient() {
        const nuevoCliente = await ClientService.crearCliente(this.newClient);
        console.log(nuevoCliente); 
      },
      async getClients(){
        this.clients = await ClientService.obtenerClientes()
        console.log(this.clients);
      }
    }
};
</script>

<style scoped>

.submit-button {
  display: inline-block;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  background-color: #3db960;
  color: #fff;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #329e51;
}
</style>