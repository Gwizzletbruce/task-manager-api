const sgMail = require("@sendgrid/mail")


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: "luke78910@gmail.com",
        subject: "Sad to see you go",
        text: `We hope you change your mind ${name} and come back soon`
    })
}

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "luke78910@gmail.com", 
        subject: "Thanks for joining",
        text: `Welcome to the app, ${name}. Let me know how you get along.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}