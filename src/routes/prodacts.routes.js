import { Router } from "express"
import prodactsController from "../controller/prodacts.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import { createProductSchema, updateProductSchema } from "../validation/prodacts.validate.js"

const router_prodacts = new Router()

router_prodacts
    .get('/', prodactsController.getAll)
    .get('/:id', prodactsController.getId)
    .post('/', validate(createProductSchema), prodactsController.create)
    .put('/:id', validate(updateProductSchema), prodactsController.update)
    .delete('/:id', prodactsController.deleteItem)


export { router_prodacts }