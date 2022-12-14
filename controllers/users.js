// Dependencies
const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user.js")

// New (registration page)
// New (registration page)
userRouter.get("/new", (req, res) => {
  res.render("users/new.ejs", {
    currentUser: req.session.currentUser,
  })
})
// Create (registration route)

// Export User Router
userRouter.post("/", (req, res) => {
    //overwrite the user password with the hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  
    User.create(req.body, (error, createdUser) => {
        // console.log(error)
        res.redirect("/")
    })
  })
  
module.exports = userRouter