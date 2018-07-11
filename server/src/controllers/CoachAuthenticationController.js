const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user){
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async registerCoach(req,res){
        console.log("Here3"+" "+req.body);
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON()

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }
        catch(err){
            res.status(400).send({
                error: 'This email already exist',
            })
        }
    },
    async loginCoach(req,res){
        try{
            const {email,password,role} = (req.body)
            const user = await User.findOne({
                where:{
                    email:email,
                    role:"Coach"
                }
            })
            if(!user){
                res.status(403).send({
                    error:"The email id is not registered"
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid){
                res.status(403).send({
                    error:"The password is incorrect"
                })
            }
            const userJson = user.toJSON()

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to log in',
            })
        }
    },
    async forgotPassCoach(req,res){
        try{
            const {email,select,answer,password} = (req.body)
            const user = await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                res.status(403).send({
                    error:"The email id is not registered"
                })
            }

            const isSelectValid = select == user.select
            if(!isSelectValid){
                res.status(403).send({
                    error:"The selected question is incorrect"
                })
            }

            const isAnswerValid = answer == user.answer
            if(!isAnswerValid){
                res.status(403).send({
                    error:"The answer is incorrect. It is case-sensitve"
                })
            }

            const isUpdate = user.update({
                password:password
            })
            const userJson = user.toJSON()

            res.send({
                user: userJson
            })
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to log in',
            })
        }
    },
    async profile(req,res){
        try{
            const {email,select,answer,password,name,contact,checkbox} = (req.body)
            const user = await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                res.status(403).send({
                    error:"The email id is not registered"
                })
            }

            const isPassValid = await user.comparePassword(password)
            if(!isPassValid){
                res.status(403).send({
                    error:"The password is incorrect"
                })
            }

            const isUpdate = user.update({
                name:name,
                contact:contact,
                answer:answer,
                select:select,
            })
            if(!isUpdate){
                res.status(403).send({
                    error:"The update not occured"
                })
                return
            }
            const userJson = user.toJSON()

            res.send({
                user: userJson
            })
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to save changes',
            })
        }
    }
}
