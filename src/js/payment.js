import express from 'express';
import config from 'config';
import s from 'stripe';
import computePrice from './pricing';
import sendMail from './sendMail';

const secretKey = config.secretKey;
const payment = express();

const createDescription = (book) => {
    return `Livre ${book.bookbinding} ${book.color}`;
};

payment.all('/save-stripe-token', (req, res) => {
    const stripe = s(secretKey);
    const token = req.body.token;
    const book = req.body.book;
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
        sendMail({ mail: token.email, subject: 'Confirmation', body: 'Hello !' });
    });

    return res.send({ success: true });
});

export default payment;
