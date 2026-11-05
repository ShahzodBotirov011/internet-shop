import Joi from "joi";

const createDiscountSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Chegirma nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Chegirma nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Chegirma nomi bo'sh bo'lmasligi kerak",
            "any.required": "Chegirma nomini kiritish shart"
        }),

    price: Joi.number().required()
});

const updateDiscountSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Chegirma nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Chegirma nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Chegirma nomi bo'sh bo'lmasligi kerak",
            "any.required": "Chegirma nomini kiritish shart"
        }),
    price: Joi.number().required()
});

export {
    createDiscountSchema,
    updateDiscountSchema
};