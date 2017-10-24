'use-strict'
import { Client } from 'pg'
require('dotenv').config()

const client = new Client({
    connectionString: process.env.PG_CON
})

const connectClient = () => {
  if(!client.processID){
    client.connect()
  }
  return client
}

module.exports = {
  query: (text, params) => {
    return connectClient().query(text, params)
        .then(result => result.rows)
        .catch(e => console.error(e.stack))
  },
  client: connectClient
}