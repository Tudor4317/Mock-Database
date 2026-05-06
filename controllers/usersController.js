import mockDatabase from "../storages/usersStorage.js"

export function getUsers(req,res) {

res.render("index", {title: "User List ",users : mockDatabase.getUsers()})

}


export function getCreate (req,res){
    res.render("createUser",{title:"Create User"})
}

export function postCreate(req,res){
    const {firstName, lastName} = req.body
    mockDatabase.addUser({firstName, lastName})
    res.redirect("/")
}

