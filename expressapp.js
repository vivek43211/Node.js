
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! 3 ')
})
app.get('/about', (req, res) => {
    res.send('this get me to another page like if else loop condition ')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})