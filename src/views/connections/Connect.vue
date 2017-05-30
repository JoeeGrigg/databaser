<template>
  <div>
    <UIHeader :title="connectionStatus" :hasHistory="false" :hasSidebarToggles="false">
      <template slot="left">
        <button class="button" @click="cancel">Cancel</button>
      </template>
    </UIHeader>

    <UIBody>
      <form @submit.prevent="connect">
        <div>
          <label for="connection-password">Password</lable>
          <input type="password" id="connection-password" v-model="password"/>
        </div>
        <button type="submit" class="button">Save</button>
      </form>
    </UIBody>

  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'
import Storage from 'electron-storage'
import db from './../../modules/DB.js'

export default {

  components: { UIHeader, UIBody },

  data () {
    return {
      password: '',
      connectionStatus: 'Please enter a password',
      connecting: false,
      store: Store
    }
  },

  created() {

    // Set the connection uuid
    this.store.connectionUUID = this.$route.params.uuid;

    // Find the connection info
    let connection = null
    Storage.get('connections.json').then(data => {
      connection = data.filter((x)=>{ return x.uuid == this.store.connectionUUID })[0]
      this.store.connection = {}
      Object.assign(this.store.connection, connection)
    })

  },

  methods: {

    removeStoreInfo() {
      delete this.store.connectionUUID
      delete this.store.connection
    },

    cancel() {
      this.removeStoreInfo()
      this.$router.push('/connections')
    },

    connect() {

      this.connectionStatus = 'Connecting...'

      new db({
        engine: this.store.connection.engine,
        host: this.store.connection.host,
        port: this.store.connection.port,
        database: this.store.connection.database,
        username: this.store.connection.username,
        password: this.password
      }).then(res => {
        this.store.DB = res
        this.$router.push('/server')
      }).catch(err => {
        this.removeStoreInfo()
        this.$router.push('/connections')
        console.log('Connection Error:', err)
      })

    }

  }

}
</script>

<style>

</style>
