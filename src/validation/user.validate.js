import Joi from "joi"


const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        'string.min': 'Foydalanuvchi ism 3 ta harf kiritsin',
        'string.max': 'Foydalanuvchi ismi maksimal 40 ta harf kiritsin',
        'string.empty': "Foydalanuvchi ism bo'sh bo'lmasligi shart",
        'any.required': 'Foydalanuvchi ism kiritishi shart'
    }),
    email: Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email': "Email formati noto'g'ri",
        'string.min': 'Foydalanuvchi email kamida 3 ta harf kiritsin',
        'string.max': 'Foydalanuvchi email maksimal 50 ta harf kiritsin',
        'string.empty': "Foydalanuvchi email bo'sh bo'lmasligi shart",
        'any.required': 'Foydalanuvchi email kiritishi shart'
    })
})


const updateUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        'string.min': 'Foydalanuvchi ism 3 ta harf kiritsin',
        'string.max': 'Foydalanuvchi ismi maksimal 40 ta harf kiritsin',
        'string.empty': "Foydalanuvchi ism bo'sh bo'lmasligi shart",
        'any.required': 'Foydalanuvchi ism kiritishi shart'
    }),
    email: Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email': "Email formati noto'g'ri",
        'string.min': 'Foydalanuvchi email kamida 3 ta harf kiritsin',
        'string.max': 'Foydalanuvchi email maksimal 50 ta harf kiritsin',
        'string.empty': "Foydalanuvchi email bo'sh bo'lmasligi shart",
        'any.required': 'Foydalanuvchi email kiritishi shart'
    })
})

export {
    createUserSchema,
    updateUserSchema
}