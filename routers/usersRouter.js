import {Router} from "express"
import { getCreate } from "../controllers/usersController.js"
import { postCreate } from "../controllers/usersController.js"
import { getUsers } from "../controllers/usersController.js"
import { getUpdate } from "../controllers/usersController.js"
import { postUpdate } from "../controllers/usersController.js"
import { deletePost } from "../controllers/usersController.js"
const usersRouter = Router()

usersRouter.get("/",getUsers)
usersRouter.get("/create", getCreate)
usersRouter.post("/create",postCreate)
usersRouter.get("/:id/update",getUpdate)
usersRouter.post("/:id/update",postUpdate)
usersRouter.post("/:id/delete",deletePost)
export default usersRouter 