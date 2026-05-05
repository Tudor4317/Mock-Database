import userStorage from "../storages/usersStorage"

export function getUsers(req,res) {

res.render("index", {title: "User List ",users : userStorage.getUsers()})

}


export function getCreate (req,res){
    res.render("createUser",{title:"Create User"})
}

export function postCreate(req,res){
    const {firstName, lastName} = req.body
    userStorage.addUser({firstName, lastName})
    res.redirect("/")
}