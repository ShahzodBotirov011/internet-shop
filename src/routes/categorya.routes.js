import { Router } from "express";
import categoryaController from "../controller/categorya.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import {createCategorySchema,updateCategorySchema
} from "../validation/categorya.validate.js";

const router_categorya = new Router();

router_categorya
    .get('/', categoryaController.getAll)
    .get('/:id', categoryaController.getId)
    .post('/', validate(createCategorySchema), categoryaController.create)
    .put('/:id', validate(updateCategorySchema), categoryaController.update)
    .delete('/:id', categoryaController.deleteItem);

export { router_categorya };