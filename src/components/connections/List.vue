<template>
  <ul class="connection-list">
    <li class="connection" v-for="connection in connections">
      <div class="connection_info">
        <h2>{{ connection.nickname }}</h2>
        <span>{{ connection.host }}</span>
      </div>
      <div class="actions_button-group">
        <router-link :to="'/connections/connect/'+connection.uuid" tag="button" class="button">Connect</router-link>
        <router-link :to="'/connections/edit/'+connection.uuid" tag="button" class="button">Edit</router-link>
        <button href="#" @click="deleteConnection(connection.uuid)" class="button">Delete</button>
      </div>
  </li>
  </ul>
</template>

<script>
import Storage from 'electron-storage'

export default {

  data() {
    return {
      connections: []
    }
  },

  created() {
    this.getConnections()
  },

  methods: {

    getConnections() {
      Storage.get('connections.json', (err, data) => {
        if (!err) {
          data = data.sort(function(a, b){
            if(a.nickname < b.nickname) return -1
            if(a.nickname > b.nickname) return 1
            return 0
          })
          this.connections = data
        }
      })
    },

    deleteConnection(uuid) {
      let connections = null;
      Storage.get('connections.json').then(data => {
        connections = data.filter((x)=>{ return x.uuid != uuid })
      }).then(() => {
        Storage.set('connections.json', connections);
      }).then(() => {
        this.getConnections()
      })
    }

  }

}

</script>
