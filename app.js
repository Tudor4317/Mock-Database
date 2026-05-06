import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import usersRouter from "./routers/usersRouter.js"
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs")
const cssPath = path.join(__dirname,"public")

app.use(express.static(cssPath))
app.use(express.urlencoded({extended: true}))

app.use("/",usersRouter)


const PORT = 3000 
app.listen(PORT,(error) =>{
    if(error){
        console.error(error)
        return
    }
    console.log(`Running on port ${PORT}`)
})