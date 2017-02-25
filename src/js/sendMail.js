import nodemailer from 'nodemailer';
import { mjml2html } from 'mjml';

const transporter = nodemailer.createTransport({
    port: 587,
    host: 'mail.numeezy.com',
    tls: true,
    auth: {
        user: 'contact@larbreapages.fr',
        pass: process.env.MAIL_PASSWORD,
    },
});

const htmlOutput = mjml2html(`<mjml>
    <mj-body>
        <mj-container>
            <mj-section padding-bottom="0">
                <mj-column>
                    <mj-image href="https://larbreapages.fr" src="https://framapic.org/OT3L63EFS7re/g2IYJlOxZppA.png" align="center" width="360">
                    </mj-image>
                </mj-column>
            </mj-section>
            <mj-section padding-top="0">
                <mj-text width="40%" align="center" font-size="13" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
                    <p>Merci d'avoir choisi <b>L'Arbre À Pages</b> pour votre achat ! Votre commande a été transmise et sera bientôt traitée. Une facture vous sera envoyée prochainement.</p>
                </mj-text>
            </mj-section>
        </mj-container>
    </mj-body>
</mjml>`).html;

const mailOptions = {
    from: '"L\'Arbre à Pages" <contact@larbreapages.fr>',
    subject: 'Confirmation de commande | L\'arbre à Pages',
    html: htmlOutput,
};

const sendMail = (email) => transporter.sendMail({ ...mailOptions, to: email });

export default sendMail;
