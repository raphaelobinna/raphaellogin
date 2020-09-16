const express = require('express');
//const sendMails = require('./controller')
const bodyParser = require('body-parser')
const path = require('path');
const log = console.log
const nodemailer = require('nodemailer');
const app = express();



const PORT =  process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());





const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raphaelogbonnaya@gmail.com',
        pass: 'iheanyichukwu'
    }
});

const sendMails = (mail) => {
    const mailOptions = {
        from: 'raphaelogbonnaya@gmail.com',
        to: mail.to,
        subject: mail.subject,
        html: mail.body
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent' + data.response)
        }
    });
};



app.post('/email', (req,res)=>{

    var chatlink = 'https://obinnachat.herokuapp.com/'

    mail = {
        to: req.body.email,
        subject: req.body.text,
        body: 'Welcome follow the displayed link to join the chat :  ' + chatlink
    }
    sendMails(mail)
    console.log('Data: ', req.body);
    res.redirect('/')
    
    //  sendMails(email, text, function (err, data) {
    //      if (err) {
    //        res.status(500).json({ message: 'Internal error'})
    //     } else {
    //         res.json({ message: 'Email sent'})
    //    }
    //  })
   
});

app.get('/', (req,res)=>{
    res.sendFile( path.join(__dirname, 'mail.html'))
})

app.listen(PORT, () => log('server is starting'))



//https://obinnachat.herokuapp.com/