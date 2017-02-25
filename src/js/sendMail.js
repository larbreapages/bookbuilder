import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    port: 587,
    host: 'mail.numeezy.com',
    tls: true,
    auth: {
        user: 'contact@larbreapages.fr',
        pass: process.env.MAIL_PASSWORD,
    },
});

const mailOptions = {
    from: '"L\'Arbre à Pages" <contact@larbreapages.fr>',
    to: 'contact@labreapages.fr',
    subject: 'Confirmation de commande | L\'arbre à Pages',
    html: 'Merci d\'avoir choisi L\'Arbre À Pages pour votre achat ! Votre commande a été transmise et sera bientôt traitée. Une facture vous sera envoyée prochainement.',
};

const sendMail = ({ mail, subject, body }) => transporter.sendMail({ ...mailOptions, to: mail, subject, html: body });

export default sendMail;
