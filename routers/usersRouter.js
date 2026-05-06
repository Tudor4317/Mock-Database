import {Router} from "express"
import { getCreate } from "../controllers/usersController.js"
import { postCreate } from "../controllers/usersController.js"
import { getUsers } from "../controllers/usersController.js"
const usersRouter = Router()

usersRouter.get("/",getUsers)
usersRouter.get("/create", getCreate)
usersRouter.post("/create",postCreate)

export default usersRouter 