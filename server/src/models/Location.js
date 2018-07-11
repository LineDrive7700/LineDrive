
module.exports = (sequelize, DataTypes) =>{

    const Location = sequelize.define('Location',{
        Location : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
       Cages : DataTypes.INTEGER,
       Coaches: DataTypes.INTEGER
    })
    return Location
}