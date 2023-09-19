const db = require('../config/db')


module.exports={

    allPerson(){
        const query = 'SELECT * FROM pessoas';
        return db.promise().query(query)
    },
    async createPerson(person){
        const query = 'INSERT INTO pessoas ( nome, nascimento) VALUES (?,?)'
        let d = person.nascimento.split("/");
        let date = new Date(d[2] + '/' + d[1] + '/' + d[0]);
        const values = [person.nome, date]
        return db.promise().query(query, values);
    },
    async createAddress(address){
        const query = 'INSERT INTO enderecos ( logradouro, cep, numero, cidade, userId) VALUES (?,?,?,?,?)'
        const values = [address.logradouro, address.cep, address.numero, address.cidade, address.userId]
        return db.promise().query(query, values);
    },
    updatePerson(person, person_id) {
        const query = `UPDATE pessoas SET nome = ?, nascimento = ? WHERE id = ?`
        let d = person.nascimento.split("/");
        let date = new Date(d[2] + '/' + d[1] + '/' + d[0]);
        const values = [person.nome, date, person_id]

        return db.promise().query(query, values);
    },
    findPersonById(person_id) {
        return db.promise().query(`SELECT * FROM pessoas WHERE id = ${person_id}`);
    },
    findPersonAddress(person_id) {
        return db.promise().query(`SELECT * FROM enderecos WHERE userId = ${person_id}`);
    },
    addDefaultAddress(data, person_id){
        return db.promise().query(`UPDATE pessoas SET defaultAddress = ${data.defaultAddress} WHERE id = ${person_id}`)
    }
}