const {CoachAvailability} = require('../models')
const {CageAvailability} = require('../models')
const {User} = require('../models')

module.exports = {
    
    async index(req,res){
        try{
            var {email,locationId,selectDate} = (req.query)
            console.log(typeof(locationId)+"*****************")
            var dates=[]
            var x=""
            if(locationId&&email&&selectDate){
                dates = await CoachAvailability.findAll({
                    where:{
                        email:email,
                        locationId:locationId,
                        selectDate:selectDate
                    }
                })
            }
            else if(locationId && email){
                dates= await CoachAvailability.findAll({
                    where:{
                        locationId:locationId,
                        email:email
                    }
                })
            }
            else if(locationId && selectDate){
                dates= await CoachAvailability.findAll({
                    where:{
                        selectDate:selectDate,
                        locationId:locationId
                    }
                })
            }
            else{
                dates= await CoachAvailability.findAll({
                    where:{
                        locationId:locationId
                    }
                })
            }
            res.send(dates)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to fetch slots for this date',
            })
        }
    },

    async post(req,res){
        try{
            console.log("In post Booking"+" "+req.body.selectAvailability)
            Avai = req.body.selectAvailability
            email = req.body.email
            selectDate = req.body.selectDate
            locationId = req.body.locationId
            
            const user = await User.findOne({
                where:{
                    email:email,
                    role:"Coach"
                }
            })
            if(!user){
                res.status(403).send({
                    error:"The email id is not registered as Coach"
                })
            }
            else{
                console.log("The email id is registered as Coach")
            }

            for(Slots in Avai){

                console.log(Avai[Slots]+" ")
                const isAvailable = await CoachAvailability.findOne({
                    where:{
                        email:email,
                        selectDate:selectDate,
                        slotsId:Avai[Slots]-1
                    }
                })
                
                if(isAvailable){
                    console.log("Available........")
                    continue;
                }
                await CoachAvailability.create({
                    email:email,
                    selectDate:selectDate,
                    slotsId:Avai[Slots]-1,
                    locationId:locationId,
                    booked_status: 0
                })
                console.log(email+" "+selectDate+" "+Slots+" "+locationId)

            }
            const dates= await CoachAvailability.findAll({
                where:{
                    email:email,
                    locationId:locationId,
                    selectDate:selectDate
                }
            })
            res.send(dates)

        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to create the Slot',
            })
        }
    },
    async delete(req,res){
        try{
            console.log("In post Booking*************************"+" "+JSON.stringify(req.query))
            selected = req.query.selected;
            console.log(selected[0]);
            let objTest = JSON.parse(selected[0]);
            console.log(typeof objTest);
            console.log("&&&&&&&&&&&&&&&&&&&&&&" + objTest.id);
            //username = req.query.user
            const user = await User.findOne({
                where:{
                    //email:username,
                    role:"Coach"
                }
            })
            if(!user){
                res.status(403).send({
                    error:"The email id is not registered as Coach"
                })
            }
            else{
                console.log("The email id is registered as Coach")
            }
            // console.log(selected);
            for(Slots in selected){

                console.log(JSON.parse(selected[Slots]).id)
                
                const isAvailable = await CoachAvailability.findOne({
                    where:{
                        id:JSON.parse(selected[Slots]).id,
                        booked_status: 0
                    }
                })
                
                if(!isAvailable){
                    console.log("Not Available........")
                    continue;
                }
                await CoachAvailability.destroy({
                    where:{
                        id:JSON.parse(selected[Slots]).id,
                        booked_status:0
                    }
                })
               // console.log(email+" "+selectDate+" "+Slots+" "+locationId)

            }
            const dates= await CoachAvailability.findAll({
                where:{
                    email:JSON.parse(selected[Slots]).email,
                    locationId:JSON.parse(selected[Slots]).locationId,
                    selectDate:JSON.parse(selected[Slots]).selectDate
                }
            })
            res.send(dates)

        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to delete the Slot',
            })
        }
    },
}
