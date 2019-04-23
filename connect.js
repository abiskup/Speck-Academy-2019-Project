const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'andrijabi',
  host: '138.68.87.73',
  database: 'db_andrijabi',
  password: 'wc#Z9cH>',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'andrijabi',
  host: '138.68.87.73',
  database: 'db_andrijabi',
  password: 'wc#Z9cH>',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})