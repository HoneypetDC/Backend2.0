const nodemailer = require("nodemailer");

module.exports = class MascotasController {
    
    static async main(request,response) {
        try {

            const {
                name,
                email,
                asunto
            }= request.body;

            console.log(name);
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
                from: '"HoneyPetDC 👻" <honeypetdc@gmail.com>', // sender address
                to: email, // list of receivers
                subject: asunto, // Subject line
                html: "Hola "+name+", gracias por querer apoyarnos, puedes enviarnos dinero a la siguiente cuenta 321-456-789", // html body
            });
            response.status(201).json("hola");
        } catch (err) {
            response.status(400).json("OH, NO");
        }
    }
};