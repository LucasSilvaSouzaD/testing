# testing
Mocks, Stubs, Spies, end-to-end e Code Coverage, TDD e BDD

Mocks - é um dado fake que reflete um dado real. 
podemos usar de exemplo uma requisição para criar um usuário,
nessa requisição vamos precisar do seguinte objeto:
{
    "nome": "Exemplo",
    "idade": 19,
    "e-mail": "exemplo@example.com",
}
para testarmos só precisamos criar um objeto fake baseado nesse real... 

Stubs - usamos para testar com a finalidade de ir no inicio - fim, não tem meio termo ou caminhos a seguir igual o Mock, 
exemplo no Mock podemos pegar o valor x, passar pelo caminho tal e retornar o valor y, já o stubs vamos pegar o
valor x e retornar o valor y.

fiel system module - o módulo FS disponibiliza diversas funcionalidades para trabalharmos com arquivos (CRUD)
