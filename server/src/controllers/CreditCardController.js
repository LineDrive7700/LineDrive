const {CreditCard} = require('../models')
const {User} = require('../models')

module.exports = {
    
    async post(req,res){
        try{
            console.log("In post Booking"+" "+req.body)
            let objTest = req.body.CreditCardNumber;
            console.log(typeof objTest+" "+objTest);
            //console.log(CreditCardNumber);

            const iscreditcardavailable = await CreditCard.findOne({
                where:{
                    CreditCardNumber:objTest,
                }
            })
            if(iscreditcardavailable){
                res.status(403).send({
                    error:"The credit card is already registered."
                })
            }
            else{
                console.log("The credit card is registered OK")
            }
            const creditcard = await CreditCard.create(req.body)

            res.send(creditcard)

        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to enter the credit card',
            })
        }
    },
    
}
