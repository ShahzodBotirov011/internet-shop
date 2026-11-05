import Joi from "joi";

const createCategorySchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Kategoriya nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Kategoriya nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Kategoriya nomi bo'sh bo'lmasligi kerak",
            "any.required": "Kategoriya nomini kiritish shart"
        })
});

const updateCategorySchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Kategoriya nomi kamida 3 ta harf bo'lishi kerak",
            "string.max": "Kategoriya nomi 40 ta harfdan oshmasligi kerak",
            "string.empty": "Kategoriya nomi bo'sh bo'lmasligi kerak",
            "any.required": "Kategoriya nomini kiritish shart"
        })
});

export {
    createCategorySchema,
    updateCategorySchema
};