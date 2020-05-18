// Validation
const Joi = require('@hapi/joi')

// Registration Validation
const regVal = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

//Login Validation
const logVal = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(4).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

// Password Change validation
const passVal = (data) => {
    const schema = Joi.object({
        curpassword: Joi.string().min(6).required(),
        newpassword: Joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.regVal = regVal
module.exports.logVal = logVal
module.exports.passVal = passVal