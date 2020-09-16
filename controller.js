const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raphaelogbonnaya@gmail.com',
        pass: 'iheanyichukwu'
    }
});

const sendMails = (email, text) => {
    const mailOptions = {
        from: 'raphaelogbonnaya@gmail.com',
        to: email,
        text
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent', data)
        }
    });
};
module.exports = sendMails
