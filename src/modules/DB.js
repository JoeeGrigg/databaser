import pg from 'pg'

export default class db {

  constructor(config = {}) {

    return new Promise((resolve, reject) => {

      this.supportedEngines = {
        postgres: 'postgres'
      }
      this.connection = config
      this.engine = config.engine

      // Create Connection
      this.connect().then(res => {
        resolve(this)
      }).catch(err => {
        reject(err)
      })

    })

  }

  // Create Connection
  connect() {

    return new Promise((resolve, reject) => {

      let client

      switch(this.engine) {

        case this.supportedEngines.postgres:
          client = new pg.Pool({
            host: this.connection.host,
            port: this.connection.port,
            database: this.connection.database,
            user: this.connection.username,
            password: this.connection.password
          })
          break

      }

      this.client = client

      this.listTables().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })

    })

  }

  // List tables
  listTables() {

    return new Promise((resolve, reject) => {

      switch(this.engine) {

        case this.supportedEngines.postgres:
          this.query(`SELECT table_schema as schema, table_name as name FROM information_schema.tables WHERE table_schema='public'`).then(res => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
          break

      }

    })

  }

  // Query
  query(sql) {

    return new Promise((resolve, reject) => {

      switch(this.engine) {

        case this.supportedEngines.postgres:
          this.client.query(sql).then(res => {
            resolve(res.rows)
          }).catch(err => {
            console.log(err)
            reject(err)
          })
          break

      }

    })

  }

}
