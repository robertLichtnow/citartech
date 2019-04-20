# Projeto para lista de países

Projeto desenvolvido para o desafio da citartech [https://github.com/citartech/job-vacancies/blob/master/backend-node.md](https://github.com/citartech/job-vacancies/blob/master/backend-node.md)

## Subindo o ambiente

Para subir o ambiente com todos os dados já preenchidos, é necessário acesso ao docker-compose. O comando a seguir pode ter necessidade de `sudo` caso o usuário não tenha configurado o docker para usuários sem sudo. Na raiz do projeto, execute:

`docker-compose up --build`

## Caminhos

O servidor estará disponível em `localhost:4000` e os botões de acesso ao serviço já estarão na página inicial

## Testes

Para rodar os testes, é necessário uma instância do mongodb rodando no endereço `mongodb://localhost:27017` com a database `citartech_test` criadao. Caso ela não esteja criada, os testes irão criá-la, mas será mostrado um erro.

Os comandos para rodar os testes são `npm install`, caso ainda não o tenha feito e `npm test`
