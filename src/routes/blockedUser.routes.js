import { Router } from "express"
import blockedUserController from "../controller/blockedUser.controller.js"
import { validate } from "../middleware/validate.middleware.js"
import {createBlockedUserSchema,updateBlockedUserSchema
} from "../validation/blockedUser.validate.js"

const router_blockedUser = new Router()

router_blockedUser
    .get('/', blockedUserController.getAll)
    .get('/:id', blockedUserController.getId)
    .post('/', validate(createBlockedUserSchema), blockedUserController.create)
    .put('/:id', validate(updateBlockedUserSchema), blockedUserController.update)
    .delete('/:id', blockedUserController.deleteItem)

export { router_blockedUser }