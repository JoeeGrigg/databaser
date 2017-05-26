<template>
  <form @submit.prevent="save">
    <div>
      <label for="connection-uuid">UUID</lable>
      <input type="text" id="connection-uuid" v-model="connection.uuid" disabled/>
    </div>
    <div>
      <label for="connection-engine">Engine</lable>
      <select id="connection-engine" v-model="connection.engine" required>
        <option value="" selected disabled>Please select an engine...</option>
        <option value="postgres">PostgreSQL</option>
      </select>
    </div>
    <div>
      <label for="connection-nickname">Nickname</lable>
      <input type="text" id="connection-nickname" v-model="connection.nickname" required/>
    </div>
    <div>
      <label for="connection-host">Host</lable>
      <input type="text" id="connection-host" v-model="connection.host" required/>
    </div>
    <div>
      <label for="connection-port">Port</lable>
      <input type="number" id="connection-port" v-model="connection.port" required/>
    </div>
    <div>
      <label for="connection-database">Database</lable>
      <input type="text" id="connection-database" v-model="connection.database" required/>
    </div>
    <div>
      <label for="connection-username">Username</lable>
      <input type="text" id="connection-username" v-model="connection.username" required/>
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
