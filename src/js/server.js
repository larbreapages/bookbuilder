import express from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';
import payment from './payment';

const app = express();
const PORT = process.env.PORT || 9000;
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Stripe payment
app.use(payment);

// serve static stuff
app.use(express.static(path.join(__dirname, '../../dist')));

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
