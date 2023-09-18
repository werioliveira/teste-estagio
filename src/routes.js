const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')

routes.get('/person',PersonController.getAll)
routes.get('/person/:id',PersonController.findPersonById)
routes.get('/person/:id/address',PersonController.listAddress)
routes.put('/person/:id',PersonController.update)
routes.post('/person', PersonController.post)
routes.post('/address', PersonController.createAddress)
routes.put('/person/:id/defaultAddress',PersonController.addDefaultAddress)

module.exports = routes