const express = require('express')
const cluster = require('cluster')

const app = express()

app.get('/', (req, res) => {
  let sum = 0
  for (let index = 0; index < 1e9; index++) {
    sum += index
  }
  cluster.worker.kill()
  res.send(`end req on process ID[${process.pid}]`)
})

app.listen(3400, () => {
  console.log('Server is ready on : http://localhost:3400')
})