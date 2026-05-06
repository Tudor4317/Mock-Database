import mockDatabase from "../storages/usersStorage.js"
import {body, validationResult,matchedData } from "express-validator"
const alphaErr = "must only contain letters. "
const lengthErr = "must be between 1 and 10 charactes."
const validateUser =  [
    body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({min: 1,max:10}).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({min:1, max:10}).withMessage(`Last name ${lengthErr}`)
]

export function getUsers(req,res) {

res.render("index", {title: "User List ",users : mockDatabase.getUsers()})

}

export const postCreate = [
    validateUser,
    (req,res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render("createUser",{ 
                title: "Create user",
                errors: errors.array()


            });
        }
        const {firstName,lastName} = matchedData(req)
        mockDatabase.addUser({firstName,lastName})
        res.redirect("/")
    }
]

export function getCreate (req,res){
    res.render("createUser",{title:"Create User",errors: []
    })
}

export function getUpdate(req,res){
    const user = mockDatabase.getUsers(req.params.id)
    res.render("updateUser",{title:"Update user", user: user, errors: []})
}
export const postUpdate = [
    validateUser,
    (req,res) =>{
        const user = mockDatabase.getUsers(req.params.id)
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render("updateUser",{title: "Update user", user: user, errors: errors.array()})

        }
        const {firstName, lastName} = matchedData(req)
        mockDatabase.updateUser(req.params.id, {firstName,lastName})
        res.redirect("/")
    }
]
export function deletePost(req,res){
    mockDatabase.deleteUser(req.params.id)
    res.redirect("/")

}

