import { Router } from "express"
import basketController from "../controller/basket.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import { createBasketSchema, updateBasketSchema } from "../validation/basket.validate.js"

const router_basket = new Router()

router_basket
    .get('/', basketController.getAll)
    .get('/:id', basketController.getId)
    .post('/', validate(createBasketSchema), basketController.create)
    .put('/:id', validate(updateBasketSchema), basketController.update)
    .delete('/:id', basketController.deleteItem)

export { router_basket }