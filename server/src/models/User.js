const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user,options){
    const SALT_FACTOR = 8

    if(!user.changed('password')){
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password,salt,null))
        .then(hash=>{
            user.setDataValue('password',hash)
        })
}


module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
        email : {
            type:DataTypes.STRING,
            unique: true,
            required: true
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        contact: DataTypes.STRING,
        select: DataTypes.STRING,
        answer: DataTypes.STRING,
        code: DataTypes.STRING,
        role: DataTypes.STRING,
    },
    {
        hooks:{
            
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword =  function(password){
        return bcrypt.compareAsync(password,this.password)
    }
    return User
}