import express from "express";
import bodyParser from "body-parser";
import routes from './routes/routes.js'

const app = express();

app.use('/' ,routes)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




export default app