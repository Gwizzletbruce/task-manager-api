const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//      age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0 ) {
//                 throw new Error("Age must be a positive number")
//             }
//         },
        
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             lowercase: true,
//             validate(value) {
//                 if (!validator.isEmail(value)) {
//                     throw new Error("Email is invalid")
                    
//                 }
            
//             }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes("password")) {
//                 throw new Error("Password should not contain the word password")
//             }
//         }
//     }
// })

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

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false

    }

})

const task1 = new Task({
    description: "Hoover",
    
})

task1.save().then(() => {
    console.log(task1)
}).catch(() => {
    console.log(error)
})