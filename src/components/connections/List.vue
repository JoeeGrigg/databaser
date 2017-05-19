<template>
  <ul>
    <li v-for="connection in connections">{{ connection.nickname }}</li>
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
  }

}

</script>
