import express from "express";
import bodyParser from "body-parser";
import routes from './routes/routes.js'
import helmet from 'helmet'
import cors from 'cors'


const app = express();
app.use(helmet())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/' ,routes)
app.use(cors({
    origin: ['https://creditbank.co.ke']
}));
app.set('view engine', 'hbs');


export default app