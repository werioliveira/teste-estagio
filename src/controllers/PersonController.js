const Person = require('../models/Person')


module.exports={
    async getAll(req,res){
        const results = await Person.allPerson()
        return res.json(results[0])
    },
    async findPersonById(req,res){
        const results = await Person.findPersonById(req.params.id)
        const user = results[0][0]
        return res.json({user})
    },
    async post(req,res){
        const results = await Person.createPerson(req.body)
        return res.json(results)
    },
    async createAddress(req,res){
        const results = await Person.createAddress(req.body)
        return res.json(results)
    },
    async update(req,res){
        await Person.updatePerson(req.body, req.params.id)
        return res.json({
            response: `User ${req.params.id} updated!`
        });
    },
    async listAddress(req,res){
        const results = await Person.findPersonAddress(req.params.id)
        const address = results[0]
        return res.json({address})
    },
    async addDefaultAddress(req,res){
        const results = await Person.addDefaultAddress(req.body)
        return res.json(results)
    }
}