const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})



// const user1 = new User({
//     name: "Mike", 
//     age: 17,
//     email: "type@gmail.com",
//     password: "xhjbjhdbcjv"
// })

// user1.save().then(() => {
//     console.log(user1)
// }).catch((error) => {
//     console.log(error)
// })

//Creating new model challenge



// const task1 = new Task({
//     description: "Hoover",
    
// })

// task1.save().then(() => {
//     console.log(task1)
// }).catch(() => {
//     console.log(error)
// })