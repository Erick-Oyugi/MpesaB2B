import app from './app.js'
import https from 'https'
import fs from 'fs'
import morgan from 'morgan'
import logger from 'logger'


const port = process.env.APP_PORT
const path_to_key = process.env.KEY_PATH
const path_to_cert = process.env.CERT_PATH
app.use(morgan('dev'))

var options = {
    key: fs.readFileSync(`${path_to_key}`),
    cert: fs.readFileSync(`${path_to_cert}`),
};

var server = https.createServer(options, app).listen(port, ()=>{
    console.log(`Mpesa B2B Payment service running on  port ${port}`)
})



// app.listen(port ,() => {

// console.log(`Mpesa B2B Payment service running on  port ${port}`)

// });



