const express = require('express');

const VeiculoController = require('./controllers/veiculo.controller');
const OficinaController = require('./controllers/oficina.controller');
const MotoristaController = require('./controllers/motorista.controller');

const routes = express.Router();

routes.get('/veiculos', VeiculoController.show);
routes.get('/oficinas', OficinaController.show);
routes.get('/motoristas', MotoristaController.show);

module.exports = routes;