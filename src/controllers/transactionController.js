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
 const date = new Date()

 let {Initiator, CommandID, SecurityCredential, SenderIdentifierType, RecieverIdentifierType, Amount, PartyA, PartyB, AccountReference, Requester, Remarks, QueueTimeOutURL, ResultURL} = req.body;

 let request = unirest('POST', `${url}`)
 .headers({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
 
 })
 .send({
     Initiator: Initiator,
     SecurityCredential: process.env.SECURITY_CREDENTIALS,
     CommandID: CommandID,
     SenderIdentifierType: SenderIdentifierType,
     RecieverIdentifierType: RecieverIdentifierType,
     Amount: Amount,
     PartyA: PartyA,
     PartyB: PartyB,
     AccountReference: AccountReference,
     Requester: Requester,
     Remarks: Remarks,
     QueueTimeOutURL: QueueTimeOutURL,
     ResultURL: ResultURL 
 
 })
 
 .end(response => {
      if (response.error) throw new Error(response.error);
      res.status(200).json(response.raw_body)
     
      console.log(`Transaction Carried out at ${date}`)
      console.log("----------------------------------------------------")
      console.log(`Transaction Details Inputted are as follows:`)
      console.log(`Initiator: ${Initiator}`)
      console.log(`CommandID: ${CommandID}`)
      console.log(`SenderIdentifierType: ${SenderIdentifierType}`)
      console.log(`ReecieverIdentifierType: ${RecieverIdentifierType}`)
      console.log(`Amount: ${Amount}`)
      console.log(`PartyA: ${PartyA}`)
      console.log(`PartyB: ${PartyB}`)
      console.log(`AccountReference: ${AccountReference}`)
      console.log(`Requester: ${Requester}`)
      console.log(`Remarks: ${Remarks}`)
      console.log(`QueTimeOutURL: ${QueueTimeOutURL}`)
      console.log(`ResultURL: ${ResultURL}`)
      console.log("-----------------------------------------------------")


      console.log("================Intitiated Mpesa Business to Business Txn==================")
      console.log(response.raw_body);


 
 });

 AuthenticationHeader()


}






export default B2BTransaction