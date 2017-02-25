import express from 'express';
import s from 'stripe';
import computePrice from './pricing';
import sendMail from './sendMail';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const payment = express();

const createDescription = (book) => {
    return `Livre ${book.bookbinding}`;
};

payment.all('/save-stripe-token', (req, res) => {
    const book = req.body.book;
    if (!book) {
        return res.status(500).send({ error: 'Something failed!' });
    }

    const stripe = s(stripeSecretKey);
    const token = req.body.token;
    const price = computePrice(book);
    const description = createDescription(book);

    if (!price) {
        return res.send({ success: false });
    }

    stripe.customers.create({
        email: token.email,
        source: token.id,
    }).then((customer) => {
        return stripe.charges.create({
            amount: price * 100,
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
    });

    return res.send({ success: true });
});

export default payment;
