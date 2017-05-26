<template>
  <div>
    <UIHeader title="Connecting..."></UIHeader>
    {{ store.connectionUUID }}
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'
import Storage from 'electron-storage'

export default {

  components: { UIHeader, UIBody },

  data () {
    return {
      showingPasswordBox: false,
      store: Store
    }
  },

  created() {

    // Set the connection uuid
    this.store.connectionUUID = this.$route.params.uuid;

    // Find the connection info
    let connection = null
    Storage.get('connections.json').then(data => {
      connection = data.filter((x)=>{ return x.uuid == this.uuid })[0];
      Object.assign(this.store.connection, connection);
    }).then(() => {
      console.log('Connection:', connection)
    })

  },

  methods: {

    connect() {
      // this.store.DB = knex({
      //   client: this.store.connection.client,
      //   connection: {
      //     host: this.store.connection.host,
      //     database: this.store.connection.database,
      //     username: this.store.connection.username,
      //     password: this.store.connection.password
      //   }
      // })
    }

  }

}
</script>

<style>

</style>
