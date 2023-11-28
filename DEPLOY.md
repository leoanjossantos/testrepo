# Deploy no Heroku

Aqui estão alguns passos para realizar o deploy da aplicação no heroku.

Este passo é indicado caso haja alguma dificuldade com a utilização do docker.

## Passos para o deploy

- Criar conta no heroku (https://heroku.com)

- Instalar o heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)

- Criar a aplicação no heroku (Create new app, na tela logada do heroku)

- Acessar o repositório clonado

- Realizar o login no heroku (https://devcenter.heroku.com/articles/heroku-cli#getting-started)
    
    Executar no terminal: `heroku login`

- Vincular o repositório com a aplicação no heroku 
    
    Executar no terminal: `heroku git:remote -a <nome-aplicação-heroku>`

- Criar um Postgres para ser utilizado pela API 
    
    Executar no terminal: `heroku addons:create heroku-postgresql:hobby-dev`

- Obter as configurações do Postgres criado
    
    Executar no terminal: `heroku pg:credentials:url`

- Alterar as configurações no arquivo `.env` com as informações do Postgres obtida pelo comando `heroku pg:credentials:url`
    Ao executar o comando será retornado as informações do banco Postgres utilizado pelo Heroku. Exemplo:
    ```
    Connection information for default credential.
    Connection info string:
        "dbname=asd123asdsa host=ec2-22-333-145-78.compute-1.amazonaws.com port=5432 user=asdkjkash password=67as76d6as7d6asd67asd67676asd54asd5asd6as5das8d7sa87d8as7d87a8s7d87 sslmode=require"
    Connection URL:
        postgres://asdkjkash:67as76d6as7d6asd67asd67676asd54asd5asd6as5das8d7sa87d8as7d87a8s7d87@ec2-22-333-145-78.compute-1.amazonaws.com:5432/asd123asdsa
    ```
    No arquivo `.env` substituir com as informações recebidas do Heroku
    ```
    DB_HOST=<host_heroku>
    DB_PORT=<port_heroku>
    DB_DATABASE=<dbname_heroku>
    DB_USERNAME=<user_heroku>
    DB_PASSWORD=<password_heroku>
    ```

- Habilitar o uso do SSL na comunicação com o Postgres
    
    Adicionar o seguinte parâmetro no arquivo `src/config/database.js`
    ```
    dialectOptions: {
        ssl: true
    }
    ```
    Devendo ficar da seguinte forma:
    ```
    module.exports = {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: false,
        dialectOptions: {
            ssl: true
        }
    }
    ```

- Fazer o deploy da aplicação no heroku:
    - Fazer os commits das mudanças
    - Executar no terminal: git push heroku main

- Testar se a aplicação está respondendo como deveria
    Utilizar o postman/insomnia para realizar a requisição
    ```
    POST https://<nome-da-aplicação>.herokuapp.com/api/v1/transactions
    HEADER: "content-type": "application/json"
    BODY:
    {
        "client_id": 1,
	    "amount": 123.00,
	    "description": "Smartband XYZ 3.0",
	    "payment_method": "cartao de credito",
	    "card_number": "4242424242424242",
	    "card_holder_name": "fulano de tal xpto",
	    "card_expiration_date": "04/30",
	    "card_cvv": "234"
    }
    ```