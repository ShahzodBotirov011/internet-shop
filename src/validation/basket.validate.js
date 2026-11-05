import Joi from "joi";

const createBasketSchema = Joi.object({
    productId: Joi.number().required().messages({
        "any.required": "Mahsulot ID sini kiritish shart"
        }),

    quantity: Joi.number().required().messages({
        "any.required": "Mahsulot sonini kiritish shart"
        }),

    price: Joi.number().required().messages({
        "any.required": "Mahsulot narxini kiritish shart"
        })
});

const updateBasketSchema = Joi.object({
    productId: Joi.number().required().messages({
        "any.required": "Mahsulot ID sini kiritish shart"
        }),
    quantity: Joi.number().required().messages({
        "any.required": "Mahsulot sonini kiritish shart"
        }),
    price: Joi.number().required().messages({
        "any.required": "Mahsulot narxini kiritish shart"
        })
});

export {
    createBasketSchema,
    updateBasketSchema
};