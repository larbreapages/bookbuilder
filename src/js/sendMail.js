import nodemailer from 'nodemailer';
import config from 'config';

const transporter = nodemailer.createTransport({
    port: 587,
    host: 'mail.numeezy.com',
    tls: true,
    auth: {
        user: 'contact@larbreapages.fr',
        pass: config.mailPassword,
    },
});

const mailOptions = {
    from: '"L\'Arbre à Pages" <contact@larbreapages.fr>',
    to: 'contact@labreapages.fr',
    subject: 'Confirmation de commande | L\'arbre à Pages',
    html: '<b>Hello world ?</b>',
};

const sendMail = ({ mail, subject, body }) => transporter.sendMail({ ...mailOptions, to: mail, subject, html: body });

export default sendMail;
