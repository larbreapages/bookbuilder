import express from 'express';
import stripePackage from 'stripe';
import { createDescription, checkValidPrice } from '../shared/utils';
import sendMail from './sendMail';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
const payment = express();

payment.all('/save-stripe-token', async (req, res) => {
    const book = req.body.book;
    if (!book) return res.status(500).send({ error: 'Something failed!' });

    const token = req.body.token;
    const description = createDescription(book);
    const amount = book.total * 100;

    if (!checkValidPrice(book)) {
        return res.send({ success: false });
    }

    try {
        await stripe.charges.create({
            amount,
            description,
            source: token.id,
            currency: 'EUR',
            metadata: { vat_rate: 20 },
        });
        await sendMail(token.email);
        return res.send({ success: true });
    } catch (e) {
        return res.send({ success: false });
    }
});

export default payment;
