<template>
  <div>
    <UIHeader title="Connecting...">
      <template slot="left">
        <div class="actions_breadcrumbs">
          <button class="button">Server</button>
          <button class="button">Database</button>
          <button class="button">Table</button>
        </div>
      </template>
      <template slot="right">
        <button class="button">Refresh</button>
      </template>
    </UIHeader>
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
      connection = data.filter((x)=>{ return x.uuid == this.store.connectionUUID })[0]
      this.store.connection = {}
      Object.assign(this.store.connection, connection)
    })

  },

  methods: {

    connect() {
    }

  }

}
</script>

<style>

</style>
