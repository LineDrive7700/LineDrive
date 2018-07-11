
module.exports = (sequelize, DataTypes) =>{

    const Slots = sequelize.define('Slots',{
        SlotsId: {
            type:DataTypes.INTEGER,
            required: true,
            unique: true
        },
        Slots : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
    })
    return Slots
}