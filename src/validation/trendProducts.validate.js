import Joi from "joi"

const createTrendProductSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.empty": "Mahsulot nomi bo'sh bo'lmasligi kerak",
            "string.min": "Mahsulot nomi kamida 3 ta belgidan iborat bo'lishi kerak",
            "string.max": "Mahsulot nomi 40 ta belgidan oshmasligi kerak",
            "any.required": "Mahsulot nomini kiritish shart"
        })
})

const updateTrendProductSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.empty": "Mahsulot nomi bo'sh bo'lmasligi kerak",
            "string.min": "Mahsulot nomi kamida 3 ta belgidan iborat bo'lishi kerak",
            "string.max": "Mahsulot nomi 40 ta belgidan oshmasligi kerak",
            "any.required": "Mahsulot nomini kiritish shart"
        })
})

export {
    createTrendProductSchema,
    updateTrendProductSchema
}