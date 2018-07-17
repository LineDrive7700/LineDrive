console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
const routes = express.Router()
var indexRouter = require('./routes/index');
var memberRouter = require('./routes/member');
var coachRouter = require('./routes/coach');
var routes1 = require('./routes1');
//app.use('/', route);


//app.use('/member', memberRouter);
//app.use('/coach', coachRouter);


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/',indexRouter)
app.use('/coach',coachRouter);
app.use('/member', memberRouter);
//require('./routes1')(app)

sequelize.sync({force : false})
.then(()=>{
    app.listen(config.port)
    console.log('Server started on port '+config.port)
})


