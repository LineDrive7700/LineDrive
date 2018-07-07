const {User} = require('../models')

module.exports = {
    
    async index(req,res){
        console.log("Here at User body"+req.body)
        try{
            console.log("Here at User body"+req.body)
            const {email} = (req.body)
            console.log("Here at User")
            const User= await User.find({
                where:{
                    email:email
                }
            })
            res.send(User)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to fetch User',
            })
        }
    },
}
