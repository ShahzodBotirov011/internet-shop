import Joi from "joi";

const createNewProductSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Mahsulot nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Mahsulot nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Mahsulot nomi bo'sh bo'lmasligi kerak",
            "any.required": "Mahsulot nomini kiritish shart"
        })
});

const updateNewProductSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Mahsulot nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Mahsulot nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Mahsulot nomi bo'sh bo'lmasligi kerak",
            "any.required": "Mahsulot nomini kiritish shart"
        })
});

export {
    createNewProductSchema,
    updateNewProductSchema
};