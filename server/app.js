const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3001

app.set('port', port)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World Server')
})

app.post('/', (req, res) => {
  res.write(JSON.stringify(req.body, null, 2))
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
