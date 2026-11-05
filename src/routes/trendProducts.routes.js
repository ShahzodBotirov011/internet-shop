import { Router } from "express"
import trendProductsController from "../controller/trendProducts.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import {createTrendProductSchema,updateTrendProductSchema
} from "../validation/trendProducts.validate.js"

const router_trendProducts = new Router()

router_trendProducts
    .get("/", trendProductsController.getAll)
    .get("/:id", trendProductsController.getId)
    .post("/", validate(createTrendProductSchema), trendProductsController.create)
    .put("/:id", validate(updateTrendProductSchema), trendProductsController.update)
    .delete("/:id", trendProductsController.deleteItem)

export { router_trendProducts }