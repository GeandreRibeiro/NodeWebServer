const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const rot = require('./config/routers');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//app.use(rot);

app.listen(8081, ()=>console.log(`Express started at http://localhost:8081`));
