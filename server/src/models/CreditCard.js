
module.exports = (sequelize, DataTypes) =>{

    const CreditCard = sequelize.define('CreditCard',{
        email : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
       CreditCardNumber : {
        type:DataTypes.STRING,
        required: true,
        unique: true
        },
       CreditCardExpiry :{
        type:DataTypes.STRING,
        required: true,
        unique: true
        },
        CreditCardName : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
        CreditCardAddress : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
        CreditCardZip : {
            type:DataTypes.STRING,
            required: true,
            unique: true
        },
    })
    return CreditCard
}