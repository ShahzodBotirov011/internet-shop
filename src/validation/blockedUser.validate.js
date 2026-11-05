import Joi from "joi";

const createBlockedUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Ism kamida 3 ta harf bo'lishi kerak",
            "string.max": "Ism 40 ta harfdan oshmasligi kerak",
            "string.empty": "Ism bo'sh bo'lmasligi kerak",
            "any.required": "Ismni kiritish shart"
        })
});

const updateBlockedUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
            "string.min": "Ism kamida 3 ta harf bo'lishi kerak",
            "string.max": "Ism 40 ta harfdan oshmasligi kerak",
            "string.empty": "Ism bo'sh bo'lmasligi kerak",
            "any.required": "Ismni kiritish shart"
        })
});

export {
    createBlockedUserSchema,
    updateBlockedUserSchema
};