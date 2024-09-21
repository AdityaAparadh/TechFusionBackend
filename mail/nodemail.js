const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS
    }
});


const sendEmail = async ( email, html )=>{
    const info = await transporter.sendMail({
        from: process.env.MAIL_AUTH_USER, 
        to: email,
        subject: "Techfusion 2k24 Registration", // Subject line
        html: html
      });
      console.log("Message sent: %s", info.messageId);
}

module.exports =  sendEmail