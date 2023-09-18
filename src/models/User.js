const db = require('../config/db')


module.exports={

    all(){
        const query = 'SELECT * FROM pessoas';
        return db.promise().query(query)
    },
    async create(user){
        const query = 'INSERT INTO pessoas ( nome, nascimento) VALUES (?,?)'
        const values = [user.nome, Date.now()]
        return db.promise().query(query, values);
    },
    async address(address){
        console.log(address)
        const query = 'INSERT INTO enderecos ( logradouro, cep, numero, cidade, userId) VALUES (?,?,?,?,?)'
        const values = [address.logradouro, address.cep, address.numero, address.cidade, address.userId]
        return db.promise().query(query, values);
    },
    update(user, user_id) {
        console.log(user, user_id)
        const query = `UPDATE pessoas SET nome = ?, nascimento = ?, defaultAddress = ? WHERE id = ?`
        const values = [user.nome, user.nascimento, user.defaultAddress, user_id]
        return db.promise().query(query, values);
    },
    findById(user_id) {
        return db.promise().query(`SELECT * FROM pessoas WHERE id = ${user_id}`);
    },
    findUserAddress(user_id) {
        return db.promise().query(`SELECT * FROM enderecos WHERE userId = ${user_id}`);
    },
}