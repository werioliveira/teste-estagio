const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')

routes.get('/person',PersonController.getAllPerson)
routes.get('/person/:id',PersonController.findPersonById)
routes.get('/person/:id/address',PersonController.listPersonAddress)
routes.put('/person/:id',PersonController.updatePerson)
routes.post('/person', PersonController.createPerson)
routes.put('/person/:id/defaultAddress',PersonController.addDefaultAddress)
routes.post('/address', PersonController.createAddress)

module.exports = routes