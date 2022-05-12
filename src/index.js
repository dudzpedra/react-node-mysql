const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const bodyParser = require('body-parser')
const router = require('./routes/videos')

const app = express()

/* app.get('/', (req, res) => {
  res.send('Express server with Node and MySQL')
}) */

app.use(express.static('./client/build'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/videos', router)

app.listen(config.PORT, () => console.log(`Server runnning on http://localhost:${config.PORT}`))