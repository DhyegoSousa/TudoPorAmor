const express = require('express');
const config = require('./config');

const tutores = require("./modulos/tutores/rotas")
const app = express();

//Configuração
app.set('port', config.app.port)

//Rotas
app.use('/api/tutores', tutores)

module.exports = app;