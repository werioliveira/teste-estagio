const User = require('../models/User')


module.exports={
    async get(req,res){
        const results = await User.all()
        return res.json(results[0])
    },
    async findById(req,res){
        const results = await User.findById(req.params.id)
        const user = results[0][0]
        return res.json({user})
    },
    async post(req,res){
        const results = await User.create(req.body)
        return res.json(results)
    },
    async address(req,res){
        const results = await User.address(req.body)
        return res.json(results)
    },
    async update(req,res){
        await User.update(req.body, req.params.id)
        return res.json({
            response: `User ${req.params.id} updated!`
        });
    },
    async listAddress(req,res){
        const results = await User.findUserAddress(req.params.id)
        const address = results[0]
        return res.json({address})
    }
}