const Person = require('../models/Person')


module.exports={
    async getAll(req,res){
        try {
            const results = await Person.allPerson()
            return res.json(results[0])
        } catch (error) {
            return res.json(error)
        } 
    },
    async findPersonById(req,res){
        try {
            const results = await Person.findPersonById(req.params.id)
            const user = results[0][0]
            return res.json({user})
        } catch (error) {
            return res.json(error)
        }

    },
    async post(req,res){
        try {
            const results = await Person.createPerson(req.body)
            return res.json(results)
        } catch (error) {
           return res.json(error) 
        }

    },
    async createAddress(req,res){
        try {
            const results = await Person.createAddress(req.body)
            return res.json(results)
        } catch (error) {
            return res.json(error) 
        }

    },
    async update(req,res){
        try {
            await Person.updatePerson(req.body, req.params.id)
            return res.json({
                response: `User ${req.params.id} updated!`
            });
        } catch (error) {
            return res.json(error) 
        }

    },
    async listAddress(req,res){
        try {
            const results = await Person.findPersonAddress(req.params.id)
            const address = results[0]
            return res.json({address})
        } catch (error) {
            return res.json(error) 
        }

    },
    async addDefaultAddress(req,res){
        try {
            const results = await Person.addDefaultAddress(req.body, req.params.id)
            return res.json(results)
        } catch (error) {
            return res.json(error) 
        }

    }
}