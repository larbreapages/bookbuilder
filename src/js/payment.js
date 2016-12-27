import express from 'express';

const payment = express();

payment.all('/save-stripe-token', (req, res) => {
    console.log(req.body);
    res.send({ token: 'abcd1234' });
});

export default payment;
