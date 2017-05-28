<template>
  <form @submit.prevent="save">
    <div class="form_row">
      <label for="connection-nickname">Nickname</label>
      <input type="text" id="connection-nickname" v-model="connection.nickname" class="input form_row-flex" required/>
      <label for="connection-engine">Engine</label>
      <select id="connection-engine" v-model="connection.engine" class="input" required>
        <option value="" selected disabled>Please select an engine...</option>
        <option value="postgres">PostgreSQL</option>
      </select>
    </div>
    <div class="form_row">
      <label for="connection-host">Host</label>
      <input type="text" id="connection-host" v-model="connection.host" class="input form_row-flex" required/>
      <label for="connection-port">Port</label>
      <input type="number" id="connection-port" v-model="connection.port" class="input" required/>
    </div>
    <div class="form_row">
      <label for="connection-database">Database</label>
      <input type="text" id="connection-database" v-model="connection.database" class="input form_row-flex" required/>
    </div>
    <div class="form_row">
      <label for="connection-username">Username</label>
      <input type="text" id="connection-username" v-model="connection.username" class="input form_row-flex" required/>
    </div>
    <button type="submit" class="button">Save</button>
  </form>
</template>

<script>
import Storage from 'electron-storage'
import UUID from 'uuid/v4'

export default {

  props: {
    uuid: String
  },

  data() {
    return {
      connection: {
        uuid: '',
        nickname: '',
        engine: '',
        host: '',
        port: '',
        database: '',
        username: ''
      }
    }
  },

  created() {

    // If UUID passed in
    if (this.uuid) {

      let connection = null;
      Storage.get('connections.json').then(data => {
        connection = data.filter((x)=>{ return x.uuid == this.uuid })[0];
        Object.assign(this.connection, connection);
      });

    } else {

      this.connection.uuid = UUID()

    }

  },

  methods: {

    save() {

      let connections = [],
          connection = Object.assign({}, this.connection)
      connections.push(connection);

      // Check if config file exists
      Storage.isPathExists('connections.json').then(itDoes => {

        if (itDoes) {

          // Get connections
          Storage.get('connections.json').then(data => {

            // Check if there is another connection with the same uuid
            let matchingConnections = data.filter((x)=>{ return x.uuid == connection.uuid });
            if (matchingConnections.length > 0) {

              // Update connection
              Object.assign(matchingConnections[0], connection);
              Storage.set('connections.json', data);

            } else {

              // Create connection
              connections = connections.concat(data);
              Storage.set('connections.json', connections);

            }

          });

        } else {

          // Create frist connection
          Storage.set('connections.json', connections);

        }

      }).then(() => {

        // Redirect to list when finished
        setTimeout(() => {
          this.$router.push('/connections')
        }, 100);

      })

    }

  }

}

</script>
