import { Router } from "express"
import newProductsController from "../controller/newProducts.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import {createNewProductSchema,updateNewProductSchema
} from "../validation/newProducts.validate.js"

const router_newProducts = new Router()

router_newProducts
    .get('/', newProductsController.getAll)
    .get('/:id', newProductsController.getId)
    .post('/', validate(createNewProductSchema), newProductsController.create)
    .put('/:id', validate(updateNewProductSchema), newProductsController.update)
    .delete('/:id', newProductsController.deleteItem)

export { router_newProducts }