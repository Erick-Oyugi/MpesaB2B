import unirest from 'unirest'
import dotenv from 'dotenv'
import axios from 'axios'
import { response } from 'express'


dotenv.config()


let bearerToken

//get authorization token

async function AuthenticationHeader(consumerKey, consumerSecret){
    const fullString =consumerKey + ":" + consumerSecret;
    let base64 = Buffer.from(fullString).toString("base64");
    console.log(base64);
    const url = process.env.URL_ENDPOINT

    axios({
        url : url,
        method: 'GET',
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Basic ${base64}`
        }
       })
       .then(response => {
        // res.status(200).json(response.data);
        bearerToken = response.data
        console.log(bearerToken)
        // console.log(bearerToken.access_token)
       
       })
       
       .catch((err) => {
        // res.status(500).json({ message: err });
       });

    
      return response.data
}


AuthenticationHeader(process.env.CONSUMER_KEY, process.env.CONSUMER_SECRET)



export { AuthenticationHeader, bearerToken}







