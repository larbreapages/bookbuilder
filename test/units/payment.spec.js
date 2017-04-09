import { assert } from 'chai';
import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import payment from '../../src/server/payment';
import sendMail from '../../src/server/sendMail';

let listeningServer;
const PORT = 9001;
const token = {
    id: 'tok_visa',
    email: 'larbreapages@yopmail.com',
};

describe('payment', () => {
    before(() => {
        const server = express();
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());
        server.use(payment);
        listeningServer = server.listen(PORT);
    });

    // @TODO: Add mailtrap configuration
    it.skip('should test email', async () => {
        const send = await sendMail(token.email);
        assert.equal(send.accepted, token.email);
    });

    it('should save stripe purchase', async () => {
        const book = {
            price: 41.81,
            priceTTC: 50.17,
            format: 'large',
            pages: 72,
            shippingCosts: 5,
            bookbinding: 'conservation',
            tva: 8.36,
            total: 55.17,
            paper: 'Gris',
        };

        const res = await fetch(`http://0.0.0.0:${PORT}/save-stripe-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book, token }),
        });

        assert.isTrue((await res.json()).success);
    });

    it('should check data', async () => {
        const book = {
            format: 'large',
            pages: 72,
            shippingCosts: 5,
            bookbinding: 'conservation',
            total: 20.17,
            paper: 'Gris',
        };

        const res = await fetch(`http://0.0.0.0:${PORT}/save-stripe-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book, token }),
        });

        assert.isFalse((await res.json()).success);
    });

    after(() => {
        listeningServer.close();
    });
});
