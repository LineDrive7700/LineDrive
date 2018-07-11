console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
const routes = express.Router()

//app.use('/', route);


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//app.use('/',routes)

require('./routes1')(app)

sequelize.sync({force : false})
.then(()=>{
    app.listen(config.port)
    console.log('Server started on port '+config.port)
})


