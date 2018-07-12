const {Slots} = require('../models')

module.exports = {
    
    async index(req,res){
       
        try{
            email: req.query.email
            selectDate: req.query.selectDate
            locationId: req.query.selectLocation
            const slots= await Slots.findAll({
            })
            res.send(slots)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to fetch User',
            })
        }
    },

    async post(req,res){
       
        try{
            const slot= await Slots.create(req.body)
            res.send(slot)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to create Slots',
            })
        }
    },

    
}
