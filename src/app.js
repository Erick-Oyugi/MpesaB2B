import express from "express";
import bodyParser from "body-parser";
import routes from './routes/routes.js'

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/' ,routes)



export default app