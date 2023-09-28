Crie uma API simples para gerenciar Pessoas. Esta API deve permitir:
•    Criar uma pessoa 
•    Editar uma pessoa
•    Consultar uma pessoa 
•    Listar pessoas 
•    Criar endereço para pessoa 
•    Listar endereços da pessoa 
•    Poder informar qual endereço é o principal da pessoa 

Uma Pessoa deve ter os seguintes campos:
•    Nome
•    Data de nascimento
•    Endereço:
•    Logradouro
•    CEP
•    Número
•    Cidade

Requisitos
•    Todas as respostas da API devem ser JSON

Diferencial
•    Testes
•    Clean Code
 
Será levado em avaliação 
•    Estrutura, arquitetura e organização do projeto
•    Boas práticas de programação
•    Alcance dos objetivos propostos.
 ____________________________________________________________
<h2>
To run code you need</h2>
- git clone https://github.com/werioliveira/teste-estagio

- cd teste-estagio/

run sql query estagio.sql to create database


## Endpoints <br>
**to get all person in database (GET)** <br>
/person

**to find person by id (GET)** <br>
/person/:id

**to list all addres from id person (GET)** <br>
/person/:id/address

**to update person data (PUT)** <br>
/person/:id

**create person (POST)**<br>
/person

**add default address to person (PUT)**<br>
/person/:id/defaultAddress

**create address (POST)**<br>
/address

you can import postman profile inside root folder named: <br>
teste-estagio.postman_collection.json

<h3>if you use yarn use this</h3>

- yarn install
- yarn dev
<h3>if you use npm use this</h3>

- npm install
- npm run dev
