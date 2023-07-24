import axios from 'axios'
import {AuthenticationHeader, bearerToken} from "./authController.js";
import b2bSchema from '../schema/b2bSchema.js';
import unirest from 'unirest';
import dotenv from 'dotenv'
import { response } from 'express';


dotenv.config()
const B2BTransaction = async (req,res,next)=> { 

 console.log(bearerToken)
 const token = bearerToken.access_token
 const url = process.env.PAYMENT_URL
 let responseData;
 console.log(token)

 let request = unirest('POST', `${url}`)
 .headers({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
 
 })
 .send({
    "Initiator": "testapi",
    "SecurityCredential": "ZqOhRJr6yMWc5vIVuRBOkgk0b9juHygbS+mP4NvGDhcPC8/V9Bv+/0a4tB08TAJYIFkP6RUo9/a66fPJLfluBm6OBCRc4cZ8U1MGBIZbdY8n/MCwH62J8Qa4cgtpw6DCQF23efp7sEnrWoYtihGECphw5DnUumrE2zHau01uRYFZLHw5T7McD860iSEeQYLzwzpnqaSI4dRB0an0MnHSKSKq1kgVOrqF70Lo4dhx47z9HdNidqvD5z8EK6SAgMWAf+hoG6vfY/X15ytng4Kb3LnMY5Qaz8wRN8vXaMZaJq2ykNJjxYyJuKNSHCh0FIjMQZ80F7i01504UULR2rAZdA==",
    "CommandID": "BusinessPayBill",
    "SenderIdentifierType": "4",
    "RecieverIdentifierType": 4,
    "Amount": 239,
    "PartyA": 600984,
    "PartyB": "000000",
    "AccountReference": "353353",
    "Requester": "254700000000",
    "Remarks": "ok",
    "QueueTimeOutURL": "https://mydomain.com/b2b/queue/",
    "ResultURL": "https://mydomain.com/b2b/result/" 
 
 })
 
 .end(response => {
      if (response.error) throw new Error(response.error);
      res.status(200).json(response.raw_body)

      console.log("================Intitiated Mpesa Business to Business Txn==================")
      console.log(response.raw_body);


 
 });

 AuthenticationHeader()


}






export default B2BTransaction