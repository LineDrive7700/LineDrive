const Joi = require('joi')

module.exports = {
  
    bookSlot(req,res,next){
        const schema = {
            email: Joi.string().email(),
            selectDate: Joi.date(),
            locationId: Joi.number().min(1).max(5),
            selectAvailability: Joi.array().items(Joi.number().min(1).max(32))
        }
        const{error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'locationId':
                    res.status(400).send({
                        error: "You must provide a valid location in the dropdown"
                    })
                    break
                case 'selectDate':
                    res.status(400).send({
                        error: 'The date should be selected from the date-picker'
                    })
                    break 
                case 'selectAvailability':
                    res.status(400).send({
                        error: 'The slot should be selected from the slot-picker'
                    })
                    break                        
                default:
                    res.status(400).send({
                        error: "Invalid Availability info. Please select proper info"
                    })
            }
        }else{
            console.log("Here2");
            next()
        }
    },

}