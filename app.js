const express = require('express');
const logger = require('morgan');
const cors = require('cors');


require('dotenv').config({ path: './envs/.env' });

const authRouter = require('./routes/api/users');
const watersRouter = require('./routes/api/water');

const pharmacyRouter = require('./routes/api/pharmacy');
const preparationsRouter = require('./routes/api/preparations');

const app = express();


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/users', authRouter);
app.use('/user/water', watersRouter);

app.use('/pharmacys', pharmacyRouter);
app.use('/pharmacy', preparationsRouter);

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message });
});

module.exports = app;
