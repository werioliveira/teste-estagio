const Person = require('../models/Person')


module.exports={
    async getAllPerson(req,res){
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
    async createPerson(req,res){
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
    async updatePerson(req,res){
        try {
            await Person.updatePerson(req.body, req.params.id)
            return res.json({
                response: `Person ${req.params.id} updated!`
            });
        } catch (error) {
            return res.json(error) 
        }

    },
    async listPersonAddress(req,res){
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