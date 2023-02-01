const { Router } = require('express');
const express = require('express')
const server = express();
var nodemailer = require("nodemailer");
var emailASerEnviado = {
    from: "alerta@globalty.com.br",
    to: '',
    subject: '',
    html: '',
};
server.use(express.json())

server.post('/email', async (req, res) => {
  const {email, assunto, Mensagem} = req.body
  emailASerEnviado.to =await email
  emailASerEnviado.subject =await assunto
  emailASerEnviado.html = await Mensagem  
  setEmail()
  return res.json(req.body);
});

server.get('/', (req, res)=>{
    return res.json({success: true, mensagem: "sucesso"})
})

//escutar porta.
server.listen('3000', () => {
    console.log('funcionou')
})
//Menssagem Enviar
var remetente = nodemailer.createTransport({
    host: "smtpi.kinghost.net",
    service: "smtpi.kinghost.net",
    port: 587,
    secure: false,
    auth: {
        user: "alerta@globalty.com.br",
        pass: "Senha@123"
    }
});

function setEmail(){
    remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
           console.log("Email enviado com sucesso.");
        }
    });
}
