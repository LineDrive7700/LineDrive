const {CoachAvailability} = require('../models')
const {CageAvailability} = require('../models')
const {User} = require('../models')
const {Slots} = require('../models')

module.exports = {
    
    async index(req,res){
        try{
            var {locationId,selectDate,CageId} = (req.query)
            console.log(typeof(locationId)+"*****************")
            var slots=[]
            var x=""
            for (i=1;i<=32;i++){
                isSlotBooked = await CageAvailability.findOne({
                    where:{
                        CageId:CageId,
                        locationId:locationId,
                        selectDate:selectDate,
                        slotsId: i
                    }
                })
                if(!isSlotBooked){
                    slot = await Slots.findOne({
                        where:{
                            SlotsId:i
                        }
                    })
                    slots.push(slot.dataValues)
                }
               
            }
            console.log(slots)
            res.send(slots)
        }
        catch(err){
            res.status(500).send({
                error: 'Error occured while trying to fetch slots for this date',
            })
        }
    },

    async post(req,res){
        try{
                
            console.log("In post Booking"+" "+req.body)
            select= JSON.stringify(req.body.selected)
            email = req.body.email
            selectDate = req.body.selectDate
            locationId = req.body.locationId
            CageId = req.body.CageId
            

            console.log("********"+typeof(select)+" ")
            console.log(JSON.parse(select)[0])
            for(i in JSON.parse(select)){

                console.log("********"+i+" ")
                const isAvailable = await CageAvailability.findOne({
                    where:{
                        locationId:locationId,
                        selectDate:selectDate,
                        slotsId:JSON.parse(select)[i].SlotsId,
                        CageId: CageId
                    }
                })
                
                if(isAvailable){
                    console.log("Available........")
                    continue;
                }
                await CageAvailability.create({
                    email:email,
                    selectDate:selectDate,
                    slotsId:JSON.parse(select)[i].SlotsId,
                    locationId:locationId,
                    CageId: CageId
                })
                console.log(email+" "+selectDate+" "+JSON.parse(select)[i].SlotsId+" "+locationId)

            }
            const dates= await CageAvailability.findAll({
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
                error: 'Error occured while trying to add the Slot',
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
