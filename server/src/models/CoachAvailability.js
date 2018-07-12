
module.exports = (sequelize, DataTypes) =>{

    const CoachAvailability = sequelize.define('CoachAvailability',{
        email : {
            type:DataTypes.STRING,
            required: true
        },
       selectDate: DataTypes.STRING,
       locationId: DataTypes.INTEGER,
       slotsId: DataTypes.INTEGER,
       booked_status: DataTypes.BOOLEAN
    })

    return CoachAvailability
}

