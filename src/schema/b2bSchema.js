import Joi from "joi";


const b2bSchema = Joi.object({
    Initiator : Joi.string(),
    SecurityCredentials : Joi.string(),
    CommandID : Joi.string(),
    SenderIdentifierType : Joi.string(),
    RecieverIdentifierType : Joi.string(),
    Amount: Joi.string(),
    PartyA: Joi.string(),
    PartyB : Joi.string(),

})

export default b2bSchema

