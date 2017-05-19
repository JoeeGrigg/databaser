<template>
  <ul>
    <li v-for="connection in connections">
      <h2>{{ connection.nickname }}</h2>
      <ul>
        <li><router-link :to="'/connections/connect/'+connection.uuid">Connect</router-link></li>
        <li><router-link :to="'/connections/edit/'+connection.uuid">Edit</router-link></li>
        <li><a href="#" @click="deleteConnection(connection.uuid)">Delete</a></li>
      </ul>
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
