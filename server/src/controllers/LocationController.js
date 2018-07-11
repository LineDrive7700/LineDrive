const {Location} = require('../models')

module.exports = {
    
    async index(req,res){
       
        try{
            console.log("Here at User body")
            
            const locations= await Location.findAll({
                
            })
            res.send(locations)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to fetch User',
            })
        }
    },

    
}
