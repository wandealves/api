const express = require('express');

const VeiculoController = require('./controllers/veiculo.controller');

const routes = express.Router();

routes.get('/veiculos', VeiculoController.show);

module.exports = routes;