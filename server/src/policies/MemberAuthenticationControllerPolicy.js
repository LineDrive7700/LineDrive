const Joi = require('joi')

module.exports = {
    registerMember(req,res,next){
        console.log("Here1");
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            name: Joi.string().regex(
                new RegExp('^[a-zA-Z ]{1,30}$')
            ),
            contact: Joi.string().regex(
                new RegExp('^[0-9]{10}$')
            ),
            select: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z ?]')
            ),
            answer: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z]')
            ),
            code: Joi.string().equal("abc@123"),
            checkbox: Joi.boolean().equal(true),
            role: Joi.string().regex(
                new RegExp('^[a-zA-Z ]{1,30}$')
            ),
        }
        const{error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password provided failed to match the following rules <br>1. It must have only lower case, upper case, 0 to 9<br> 2. It must have minimum 8 and maximum 32 characters'
                    })
                    break
                case 'code':
                    res.status(400).send({
                        error: 'The code provided is incorrect'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        error: "You must provide a valid name upto 30 characters"
                    })
                    break
                case 'contact':
                    res.status(400).send({
                        error: 'The number should be 10 digit long'
                    })
                    break
                case 'select':
                    res.status(400).send({
                        error: 'The select is the question.Select it'
                    })
                    break     
                case 'answer':
                    res.status(400).send({
                        error: 'Mention an answer'
                    })
                    break 
                case 'checkbox':
                    res.status(400).send({
                        error: 'Please select the checkbox'
                    })
                    break                               
                default:
                    res.status(400).send({
                        error: "Invalid registration info"
                    })
            }
        }else{
            console.log("Here2");
            next()
        }
    },
    profile(req,res,next){
        console.log("Here1");
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            name: Joi.string().regex(
                new RegExp('^[a-zA-Z ]{1,30}$')
            ),
            contact: Joi.string().regex(
                new RegExp('^[0-9]{10}$')
            ),
            select: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z ?]')
            ),
            answer: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z]')
            ),
            checkbox: Joi.boolean().equal(true),
        }
        const{error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Please enter your correct password'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        error: "You must provide a valid name upto 30 characters"
                    })
                    break
                case 'contact':
                    res.status(400).send({
                        error: 'The number should be 10 digit long'
                    })
                    break
                case 'select':
                    res.status(400).send({
                        error: 'Please select the question'
                    })
                    break     
                case 'answer':
                    res.status(400).send({
                        error: 'Mention an answer'
                    })
                    break 
                case 'checkbox':
                    res.status(400).send({
                        error: 'Please select the checkbox'
                    })
                    break                               
                default:
                    res.status(400).send({
                        error: "Invalid registration info"
                    })
            }
        }else{
            console.log("Here2");
            next()
        }
    },
    loginMember(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            role: Joi.string().regex(
                new RegExp('^[a-zA-Z ]{1,30}$')
            ),
        }
        const{error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break                         
                default:
                    res.status(400).send({
                        error: "Invalid info"
                    })
            }
        }else{
            next()
        }
    },
    forgotPassMember(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            select: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z ?]')
            ),
            answer: Joi.string().regex(
                new RegExp('^[0-9a-zA-Z]')
            ),
        }
        const{error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password provided failed to match the following rules <br>1. It must have only lower case, upper case, 0 to 9<br> 2. It must have minimum 8 and maximum 32 characters'
                    })
                    break
                case 'select':
                    res.status(400).send({
                        error: 'The select is the question.Select it'
                    })
                    break     
                case 'answer':
                    res.status(400).send({
                        error: 'Mention an answer'
                    })
                    break                               
                default:
                    res.status(400).send({
                        error: "Invalid info"
                    })
            }
        }else{
            next()
        }
    }

}