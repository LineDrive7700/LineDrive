module.exports = (sequelize, DataTypes) =>{

    const CageAvailability = sequelize.define('CageAvailability',{
        email : {
            type:DataTypes.STRING,
            required: true
        },
       selectDate: DataTypes.STRING,
       locationId: DataTypes.INTEGER,
       slotsId: DataTypes.INTEGER,
       CageId: DataTypes.INTEGER,
       
    })

    return CageAvailability
}