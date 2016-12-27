import express from 'express';
import config from 'config';
import s from 'stripe';

const secretKey = config.secretKey;
const payment = express();

payment.all('/save-stripe-token', (req, res) => {
    const stripe = s(secretKey);
    const token = req.body.id;
    stripe.charges.create({
        amount: 1000,
        currency: 'eur',
        source: token,
        description: 'Example charge',
    }, (err) => {
        if (err && err.type === 'StripeCardError') {
            res.send({ success: false });
        }
    });
    res.send({ success: true });
});

export default payment;
