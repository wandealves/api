const express = require('express');

const VeiculoController = require('./controllers/veiculo.controller');
const OficinaController = require('./controllers/oficina.controller');

const routes = express.Router();

routes.get('/veiculos', VeiculoController.show);
routes.get('/oficinas', OficinaController.show);

module.exports = routes;