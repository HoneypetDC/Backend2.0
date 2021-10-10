const nodemailer = require("nodemailer");

module.exports = class MascotasController {
    
    static async main(request,response) {
        try {

            const {
                nombre,
                email,
                asunto,
                mensaje
            }= request.body;

            console.log(nombre);
            console.log(email);
            console.log(asunto);

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                  user: "honeypetdc@gmail.com", // generated ethereal user
                  pass: "bufpyvvxfpryqpqi", // generated ethereal password
                },
            });
            await transporter.sendMail({
                from: `${nombre}, ${email}`, // sender address
                to: "honeypetdc@gmail.com", // list of receivers
                subject: `${asunto}, desde la Web`, // Subject line
                html: /*html*/`
                    <p><strong>Nombre o empresa: </strong>${nombre}</p>
                    <p><strong>Correo: </strong>${email}</p>
                    <p><strong>Asunto: </strong>${asunto}</p>
                    <p><strong>Mensaje: </strong>${mensaje}</p>
                `
            });
            response.status(201).json("hola");
        } catch (err) {
            response.status(400).json("OH, NO");
        }
    }
};