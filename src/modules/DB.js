import pg from 'pg'

export default class db {

  constructor(config = {}) {

    return new Promise((resolve, reject) => {

      this.connection = config

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

      let client = new pg.Pool({
        host: this.connection.host,
        port: this.connection.port,
        database: this.connection.database,
        user: this.connection.username,
        password: this.connection.password
      })

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

      this.query(`SELECT table_schema as schema, table_name as name FROM information_schema.tables WHERE table_schema='public'`).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })

    })

  }

  // Query
  query(sql) {

    return new Promise((resolve, reject) => {

      this.client.query(sql).then(res => {
        resolve(res.rows)
      }).catch(err => {
        console.log(err)
        reject(err)
      })

    })

  }

}
