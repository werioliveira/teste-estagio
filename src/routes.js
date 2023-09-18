const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/user',UserController.get)
routes.get('/user/:id',UserController.findById)
routes.get('/user/:id/address',UserController.listAddress)
routes.put('/user/:id',UserController.update)
routes.post('/user', UserController.post)
routes.post('/address', UserController.address)

module.exports = routes