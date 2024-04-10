import Joi from "joi";
export const registerValidator = Joi.object({
    email : Joi.string().required().empty().email().message({
        "any.required" : "email không được trống" ,
        "string.empty" : "email không được trống",
        "string.email" : "email không đúng định dạng"
    }),
    password : Joi.string().required().empty().min(6).message({
        "any.required" : "mk không được trống" ,
        "string.empty" : "mk không được trống",
        "string.min" : "mk > 6"
    }),
    confirmPassword :Joi.string().required().empty().min(6).message({
        "any.required" : "mk không được trống" ,
        "string.empty" : "mk không được trống",
        "string.min" : "mk > 6"
    }),
})