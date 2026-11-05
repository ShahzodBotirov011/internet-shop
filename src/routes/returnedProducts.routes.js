import { Router } from "express"
import returnedProductsController from "../controller/returnedProducts.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import {createReturnedProductSchema,updateReturnedProductSchema
} from "../validation/returnedProducts.validate.js"

const router_returnedProducts = new Router()

router_returnedProducts
    .get('/', returnedProductsController.getAll)
    .get('/:id', returnedProductsController.getId)
    .post('/', validate(createReturnedProductSchema), returnedProductsController.create)
    .put('/:id', validate(updateReturnedProductSchema), returnedProductsController.update)
    .delete('/:id', returnedProductsController.deleteItem)

export { router_returnedProducts }