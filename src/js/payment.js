import express from 'express';
import s from 'stripe';
import { createDescription, checkValidPrice } from './utils';
import sendMail from './sendMail';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const payment = express();

payment.all('/save-stripe-token', (req, res) => {
    const book = req.body.book;
    if (!book) {
        return res.status(500).send({ error: 'Something failed!' });
    }

    const stripe = s(stripeSecretKey);
    const token = req.body.token;
    const description = createDescription(book);

    if (!checkValidPrice(book)) {
        return res.send({ success: false });
    }

    stripe.customers.create({
        email: token.email,
        source: token.id,
    }).then((customer) => {
        return stripe.charges.create({
            amount: book.total * 100,
            currency: 'EUR',
            description,
            metadata: { vat_rate: 20 },
            customer: customer.id,
        }, (err) => {
            if (err && err.type === 'StripeCardError') {
                res.send({ success: false });
            }
        });
    }).then(() => {
        sendMail(token.email);
    }).catch(e => {
        console.error(e);
        return res.send({ success: false });
    });

    return res.send({ success: true });
});

export default payment;
