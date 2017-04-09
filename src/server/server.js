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

app.use(payment);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname)));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, '../../dist')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
    });
}

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
